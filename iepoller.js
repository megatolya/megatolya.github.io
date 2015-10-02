(function () {
    var LOCAL_STORAGE_KEY = '__iepoller';
    var POLLING_INTERVAL = 1000;
    var storage = this.localStorage;

    function IEPoller(id) {
        this._queue = [];
        this._handlers = {};
        this._interval = setInterval(this._pollStorage.bind(this), POLLING_INTERVAL);
        window._iepollerid = this._id = ('' + Date.now() + Math.random()) || id;
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
            var data = this._getData();
            var events = data[this._id].events;

            events[eventName] = events[eventName] || [];
            events[eventName].push(eventData);
            data[this._id].events = events;

            this._saveData(data);
        },

        _saveData: function (data) {
            storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
        },

        _getData: function () {
            var data = null;
            var str = storage.getItem(LOCAL_STORAGE_KEY);

            try {
                data = JSON.parse(str);
            } catch (ex) {}

            if (!data) {
                data = {};
            }

            var id = this._id;

            if (!data[id]) {
                data[id] = {};
                data[id].events = {};
            }

            return data;
        },

        _pollStorage: function () {
            var currentId = this._id;
            var data = this._getData();
            var handlers = this._handlers;

            Object.keys(data).forEach(function (id) {
                if (id === currentId) {
                    return;
                }

                var eventsToHandle = data[id].events;

                alert('eventsToHandle ' + JSON.stringify(eventsToHandle));
                Object.keys(eventsToHandle).forEach(function (eventName) {
                    if (!(eventName in handlers) || !eventsToHandle[eventName].length) {
                        if (!(eventName in handlers)) {
                            console.log('no handlers for', eventName);
                        } else {
                            console.log('no events of', eventName);
                        }
                        return;
                    }

                    console.log('changes in', eventName);

                    var eventHandlers = handlers[eventName];
                    eventHandlers.forEach(function (handler) {
                        eventsToHandle[eventName].forEach(function (event) {
                            handler(event);
                        });
                    });
                });

                // clear handled events
                data[id].events = {};
            });

            this._saveData(data);
        }
    };

    window.iepoller = new IEPoller();
})();
