(function () {
    var DB_NAME = '__iepoller';
    var OBJ_STORE_NAME = '__iepoller_events';
    var OBJ_STORE_KEY_PATH = '__iepoller_key_path';
    var POLLING_INTERVAL = 1000;
    var storage = this.localStorage;
    var pollers = {};

    var database;

    var waitingForConnection = [];

    function getConnection(callback) {
        if (!database) {
            waitingForConnection.push(callback);
            return;
        }

        callback(database);
    }

    sklad.open(DB_NAME, {
        version: 1,
        migration: {
            '1': function (database) {
                var objStore = database.createObjectStore(OBJ_STORE_NAME, {autoIncrement: true, keyPath: OBJ_STORE_KEY_PATH});
                objStore.createIndex('event', 'event', {unique: false});
            }
        }
    }, function (err, conn) {
        if (err) {
            console.log(err);
            return;
        }

        database = conn;

        waitingForConnection.forEach(function (handler) {
            handler(database);
        });
        // work with database database
    });

    setInterval(function () {
        Object.keys(pollers).forEach(function (pollerId) {
           pollers[pollerId]._pollStorage();
        });
    }, POLLING_INTERVAL);

    function IEPoller(id) {
        this._queue = [];
        this._handlers = {};

        window._iepollerid = this._id = id;
    }

    IEPoller.prototype = {
        on: function (eventName, handler) {
            var handlers = this._handlers[eventName] = this._handlers[eventName] || [];
            handlers.push(handler);
        },

        off: function (eventName, handler) {
            var handlers = this._handlers[eventName] = this._handlers[eventName] || [];
            handlers.splice(handlers.indexOf(handler), 1);
        },

        broadcast: function (eventName, eventData) {
            var id = this._id;
            getConnection(function (database) {
                database.insert(OBJ_STORE_NAME, {type: eventName, data: eventData, sourceId: id}, function () {});
            });
        },

        _pollStorage: function () {
            var id = this._id;
            var handlers = this._handlers;

            getConnection(function (database) {
                database.get(OBJ_STORE_NAME, {direction: sklad.DESC, limit: 9999, offset: 0}, function (err, rows) {
                    //console.log('==============================');
                    if (err) {
                        //console.log(err);
                        return;
                    }

                    var rowsToRemove = [];
                    rows.forEach(function (row) {
                        var rowData = row.value;

                        if (rowData.sourceId === id) {
                            //console.log('skip', row);
                            return;
                        }
                        //console.log('rowData.sourceId', rowData.sourceId);

                        //console.log('rowsToRemove push', rowData);
                        var eventName = rowData.type;

                        handlers[eventName] = handlers[eventName] || [];
                        var canRemoveEvent = false;

                        handlers[eventName].forEach(function (handler) {
                            canRemoveEvent = true;
                            handler(rowData.data);
                        });

                        if (canRemoveEvent) {
                            rowsToRemove.push(row.key);
                        }
                    });

                    if (!rowsToRemove.length) {
                        return;
                    }

                    var removeInfo = {};
                    removeInfo[OBJ_STORE_NAME] = rowsToRemove;
                    //console.log('rowsToRemove', rowsToRemove);
                    database.delete(removeInfo, function (err) {
                        if (err) {
                            //console.log(err.name);
                            //console.log(err.message);
                        }
                    });
                });
            });
        }
    };

    window.iepoller = function (id) {
        return pollers[id] = pollers[id] || new IEPoller(id);
    };
})();
