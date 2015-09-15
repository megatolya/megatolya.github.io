import Router from 'react-router';
import React from 'react';

import routes from './routes.jsx';

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        Router.run(routes, Router.HistoryLocation, function (Handler) {
            React.render(<Handler/>, document.body);
        });
    });
} else {
    module.exports = routes;
}
