(function () {
    var connections = {};
    var loaded = false;

    window.onLocalConnection = function (name, data) {
        console.log('incoming message!');
        console.log('incoming message name = ' + name);
        Object.keys(connections).forEach(function (connectionName) {
            var connection = connections[connectionName];

            connection._onMessage(name, data);
        });
    };
    
    document.addEventListener('DOMContentLoaded', function () {
       loaded = true; 
    });

    var ready = false;
    var queue = [];

    function onReady(callback) {
        if (!ready) {
            queue.push(callback);
            return;
        }

        callback();
    }

    var OBJECT_ID = 'local-connection';

    window.LocalConnection = function LocalConnection(outputChannel, inputChannel) {
        this._handlers = {};

        if (!loaded) {
            document.addEventListener('DOMContentLoaded', onLoad, false);
        } else {
            onLoad();
        }
        
        function onLoad() {
            var elem = document.createElement('div');
            var id = 'local-connection-placeholder';
    
            elem.id = id;
            elem.setAttribute('name', id);
            document.body.appendChild(elem);
    
            swfobject.embedSWF(
                'http://tolya.me/lc_debug.swf',
                'local-connection-placeholder',
                '100%',
                '100%',
                // For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection.
                '0.0.0',
                // To use express install, set to playerProductInstall.swf, otherwise the empty string.
                '',
                {
                    onMessage: 'onLocalConnection',
                    'in_channel': inputChannel,
                    'out_channel': outputChannel
                },
                {
                    quality: 'high',
                    allowScriptAccess: 'always',
                    allowFullScreen: 'true'
                },
                {
                    id: OBJECT_ID,
                    name: OBJECT_ID,
                    align: 'middle'
                }
            );
    
            // TODO onload
            setTimeout(function () {
                ready = true;
                queue.forEach(function (callback) {
                    callback();
                });
            }, 5000);
            
            console.log('swf injected');
        }
    };

    LocalConnection.prototype = {
        on: function (eventName, handler) {
            var handlers = this._handlers[eventName] = this._handlers[eventName] || [];
            handlers.push(handler);
        },

        off: function (eventName, handler) {
            var handlers = this._handlers[eventName] = this._handlers[eventName] || [];
            handlers.splice(handlers.indexOf(handler), 1);
        },

        emit: function (eventName, data) {
            onReady(function () {
                var emitter = document.getElementById(OBJECT_ID);
                emitter.send(eventName, data);
            });
        },

        _onMessage: function (eventName, data) {
            var handlers = this._handlers[eventName] = this._handlers[eventName] || [];
            handlers.forEach(function (handler) {
                handler(data);
            });
        }
    };

    window.getLocalConnection = function (input, output) {
        var id = input + output;
        var output = connections[id] = connections[id] || new LocalConnection(input, output);
        return output;
    };
})();
