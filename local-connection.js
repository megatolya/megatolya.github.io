(function (global) {
    // For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection.
    var swfVersionStr = '0.0.0';
    // To use express install, set to playerProductInstall.swf, otherwise the empty string.
    var xiSwfUrlStr = '';

    var params = {};

    params.quality = 'high';
    params.allowscriptaccess = 'always';
    params.allowfullscreen = 'true';

    var attributes = {};

    attributes.id = 'lc_debug';
    attributes.name = 'lc_debug';
    params.allowscriptaccess = 'always';
    attributes.align = 'middle';

    global.onLocalConnection = function (message) {
        alert(message);
    };

    var ready = false;
    var queue = [];

    function onReady(callback) {
        if (!ready) {
            queue.push(callback);
            return;
        }

        callback();
    }


    window.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            ready = true;
            queue.forEach(function (callback) {
                callback();
            });
        }, 1000);
    });



    global.LocalConnection = function LocalConnection(inputChannel, outputChannel) {
        this._handlers = {};

        window.addEventListener('DOMContentLoaded', function () {
            var elem = document.createElement('div');
            var id = 'lc';
            elem.id = id;
            elem.setAttribute('name', id);
            document.body.appendChild(elem);

            var flashvars = {
                onMessage: 'onLocalConnection',
                'in_channel': inputChannel,
                'out_channel': outputChannel
            };
            console.log('flashvars', flashvars);
            console.log('attributes', attributes);

            swfobject.embedSWF(
                'http://tolya.me/lc_debug.swf',
                'lc',
                '100%',
                '100%',
                swfVersionStr,
                xiSwfUrlStr,
                flashvars,
                params,
                attributes
            );
            console.log('embedSWF');
        });
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

        broadcast: function (eventName, eventData) {
            // todo queue
            onReady(function () {
                var emitter = document.getElementById('lc');
                emitter.send(eventData, eventData);
                console.log('sent');
            });
        }
    };

    var connections = {};

    global.getLocalConnection = function (id) {
        return connections[id] = connections[id] || new LocalConnection(id);
    };
})(window);
