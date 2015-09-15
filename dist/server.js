(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _reactRouter = __webpack_require__(1);

    var _reactRouter2 = _interopRequireDefault(_reactRouter);

    var _react = __webpack_require__(2);

    var _react2 = _interopRequireDefault(_react);

    var _routesJsx = __webpack_require__(3);

    var _routesJsx2 = _interopRequireDefault(_routesJsx);

    if (typeof document !== 'undefined') {
        document.addEventListener('DOMContentLoaded', function () {
            _reactRouter2['default'].run(_routesJsx2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
                _react2['default'].render(_react2['default'].createElement(Handler, null), document.body);
            });
        });
    } else {
        module.exports = _routesJsx2['default'];
    }

/***/ },
/* 1 */
/***/ function(module, exports) {

    module.exports = require("react-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

    module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var React = __webpack_require__(4);
    var Component = React.Component;

    var _require = __webpack_require__(1);

    var Route = _require.Route;
    var DefaultRoute = _require.DefaultRoute;
    var RouteHandler = _require.RouteHandler;

    var App = __webpack_require__(5);
    var _ = __webpack_require__(17);

    var wrapComponent = function wrapComponent(Component, props) {
        return React.createClass({
            render: function render() {
                return React.createElement(Component, props);
            }
        });
    };

    var Root = (function (_Component) {
        _inherits(Root, _Component);

        function Root() {
            _classCallCheck(this, Root);

            _get(Object.getPrototypeOf(Root.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Root, [{
            key: 'render',
            value: function render() {
                return React.createElement(RouteHandler, null);
            }
        }]);

        return Root;
    })(Component);

    module.exports = React.createElement(
        Route,
        { handler: Root, path: '/' },
        React.createElement(DefaultRoute, { name: 'default', handler: wrapComponent(App, { lang: 'ru' }) }),
        React.createElement(Route, { name: 'english', path: '/en/', handler: wrapComponent(App, { lang: 'en' }) })
    );

/***/ },
/* 4 */
/***/ function(module, exports) {

    module.exports = require("react/addons");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var _reactAddons = __webpack_require__(4);

    var _reactAddons2 = _interopRequireDefault(_reactAddons);

    var _componentComponentJsx = __webpack_require__(7);

    var _componentComponentJsx2 = _interopRequireDefault(_componentComponentJsx);

    var _headerHeaderJsx = __webpack_require__(12);

    var _headerHeaderJsx2 = _interopRequireDefault(_headerHeaderJsx);

    var _mainInfoMainInfoJsx = __webpack_require__(13);

    var _mainInfoMainInfoJsx2 = _interopRequireDefault(_mainInfoMainInfoJsx);

    var _footerFooterJsx = __webpack_require__(6);

    var _footerFooterJsx2 = _interopRequireDefault(_footerFooterJsx);

    var _instagramFrameInstagramFrameJsx = __webpack_require__(14);

    var _instagramFrameInstagramFrameJsx2 = _interopRequireDefault(_instagramFrameInstagramFrameJsx);

    var _appCss = __webpack_require__(15);

    var _appCss2 = _interopRequireDefault(_appCss);

    var _constantsCss = __webpack_require__(16);

    var _constantsCss2 = _interopRequireDefault(_constantsCss);

    var App = (function (_Component) {
        _inherits(App, _Component);

        function App() {
            _classCallCheck(this, App);

            _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(App, [{
            key: 'render',
            value: function render() {
                return _reactAddons2['default'].createElement(
                    'div',
                    { className: _appCss2['default'].root },
                    _reactAddons2['default'].createElement(
                        'div',
                        { className: _appCss2['default'].wrapper },
                        _reactAddons2['default'].createElement(_headerHeaderJsx2['default'], { lang: this.props.lang }),
                        _reactAddons2['default'].createElement(_mainInfoMainInfoJsx2['default'], { lang: this.props.lang }),
                        _reactAddons2['default'].createElement(_instagramFrameInstagramFrameJsx2['default'], { lang: this.props.lang }),
                        _reactAddons2['default'].createElement('div', { className: _constantsCss2['default'].push })
                    ),
                    _reactAddons2['default'].createElement(_footerFooterJsx2['default'], { lang: this.props.lang })
                );
            }
        }]);

        return App;
    })(_componentComponentJsx2['default']);

    exports['default'] = App;
    ;
    module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var _reactAddons = __webpack_require__(4);

    var _reactAddons2 = _interopRequireDefault(_reactAddons);

    var _componentComponentJsx = __webpack_require__(7);

    var _componentComponentJsx2 = _interopRequireDefault(_componentComponentJsx);

    var _reactRouter = __webpack_require__(1);

    var _langLangJsx = __webpack_require__(9);

    var _langLangJsx2 = _interopRequireDefault(_langLangJsx);

    var _footerCss = __webpack_require__(11);

    var _footerCss2 = _interopRequireDefault(_footerCss);

    var Footer = (function (_Component) {
        _inherits(Footer, _Component);

        function Footer() {
            _classCallCheck(this, Footer);

            _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Footer, [{
            key: 'render',
            value: function render() {
                return _reactAddons2['default'].createElement(
                    'footer',
                    null,
                    _reactAddons2['default'].createElement(
                        'div',
                        { className: _footerCss2['default'].follow },
                        _reactAddons2['default'].createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=megatolya&type=follow&count=true', frameBorder: '0', scrolling: '0', width: '160px', height: '25px' })
                    ),
                    _reactAddons2['default'].createElement(
                        'small',
                        { className: _footerCss2['default'].copyright },
                        '© 2014–',
                        new Date().getFullYear(),
                        ' ',
                        _reactAddons2['default'].createElement(
                            'a',
                            { href: 'mailto:forgetthisbox@gmail.com' },
                            this.getLocalizedData('author')
                        )
                    ),
                    _reactAddons2['default'].createElement(
                        'div',
                        { className: _footerCss2['default'].langChanger },
                        _reactAddons2['default'].createElement(
                            _reactRouter.Link,
                            { to: this.locale === 'ru' ? 'english' : 'default' },
                            this.getLocalizedData("changeLocale"),
                            _reactAddons2['default'].createElement(_langLangJsx2['default'], { lang: this.locale === 'ru' ? 'gb' : 'ru' })
                        )
                    )
                );
            }
        }]);

        return Footer;
    })(_componentComponentJsx2['default']);

    exports['default'] = Footer;
    ;
    module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var _require = __webpack_require__(2);

    var Component = _require.Component;

    var MegatolyaComponent = (function (_Component) {
        _inherits(MegatolyaComponent, _Component);

        function MegatolyaComponent() {
            _classCallCheck(this, MegatolyaComponent);

            _get(Object.getPrototypeOf(MegatolyaComponent.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(MegatolyaComponent, [{
            key: 'getLocalizedData',
            value: function getLocalizedData(name) {
                return __webpack_require__(8)[this.props.lang][name];
            }
        }, {
            key: 'locale',
            get: function get() {
                return this.props.lang;
            }
        }]);

        return MegatolyaComponent;
    })(Component);

    exports['default'] = MegatolyaComponent;
    module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

    'use strict';

    module.exports = {
        ru: Object.defineProperties({
            title: 'Анатолий Островский',
            author: 'Анатолий Островский',
            description: 'Домашняя страница Анатолия Островского',
            buildUrl: 'index.html',

            changeLocale: 'In english'
        }, {
            text: {
                get: function get() {
                    return ['Привет!', 'Меня зовут Толя Островский, и это портал имени меня.'];
                },
                configurable: true,
                enumerable: true
            }
        }),
        en: Object.defineProperties({
            title: 'Anatoly Ostrovsky',
            author: 'Anatoly Ostrovsky',
            description: 'Anatoly Ostrovsky homepage',
            buildUrl: 'en/index.html',

            changeLocale: 'По-русски'
        }, {
            text: {
                get: function get() {
                    return ['Hi!', 'My name is Anatoly Ostrovsky and welcome to my homepage.'];
                },
                configurable: true,
                enumerable: true
            }
        })
    };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var _reactAddons = __webpack_require__(4);

    var _reactAddons2 = _interopRequireDefault(_reactAddons);

    var _componentComponentJsx = __webpack_require__(7);

    var _componentComponentJsx2 = _interopRequireDefault(_componentComponentJsx);

    var _langCss = __webpack_require__(10);

    var _langCss2 = _interopRequireDefault(_langCss);

    var Lang = (function (_Component) {
        _inherits(Lang, _Component);

        function Lang() {
            _classCallCheck(this, Lang);

            _get(Object.getPrototypeOf(Lang.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Lang, [{
            key: 'render',
            value: function render() {
                var className = ['flag-icon', 'flag-icon-' + this.props.lang, _langCss2['default'].flagIcon].join(' ');
                return _reactAddons2['default'].createElement('span', { className: className });
            }
        }]);

        return Lang;
    })(_componentComponentJsx2['default']);

    exports['default'] = Lang;
    ;
    module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

    // removed by extract-text-webpack-plugin
    module.exports = {"flagIcon":"lang__flagIcon___3QCLY"};

/***/ },
/* 11 */
/***/ function(module, exports) {

    // removed by extract-text-webpack-plugin
    module.exports = {"langChanger":"footer__langChanger___3wmHa","copyright":"footer__copyright___2ernx","follow":"footer__follow___38Ua-"};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var React = __webpack_require__(4);
    var Component = __webpack_require__(7);

    var Header = (function (_Component) {
        _inherits(Header, _Component);

        function Header() {
            _classCallCheck(this, Header);

            _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Header, [{
            key: 'render',
            value: function render() {
                return React.createElement(
                    'header',
                    { role: 'banner', className: 'header' },
                    React.createElement(
                        'hgroup',
                        null,
                        React.createElement(
                            'h1',
                            null,
                            React.createElement(
                                'a',
                                { href: 'https://plus.google.com/+АнатолийОстровский' },
                                this.getLocalizedData('author')
                            )
                        ),
                        React.createElement(
                            'h2',
                            null,
                            'aka ',
                            React.createElement(
                                'a',
                                { href: 'https://github.com/megatolya' },
                                'megatolya'
                            )
                        )
                    )
                );
            }
        }]);

        return Header;
    })(Component);

    exports['default'] = Header;
    ;

    module.exports = Header;
    module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var React = __webpack_require__(4);
    var Component = __webpack_require__(7);

    var Header = (function (_Component) {
        _inherits(Header, _Component);

        function Header() {
            _classCallCheck(this, Header);

            _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Header, [{
            key: 'render',
            value: function render() {
                return React.createElement(
                    'main',
                    null,
                    React.createElement(
                        'article',
                        null,
                        this.getLocalizedData('text').map(function (str, i) {
                            return React.createElement(
                                'p',
                                { key: i },
                                str
                            );
                        })
                    )
                );
            }
        }]);

        return Header;
    })(Component);

    exports['default'] = Header;
    ;
    module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var React = __webpack_require__(4);
    var Component = __webpack_require__(7);

    var InstagramFrame = (function (_Component) {
        _inherits(InstagramFrame, _Component);

        function InstagramFrame() {
            _classCallCheck(this, InstagramFrame);

            _get(Object.getPrototypeOf(InstagramFrame.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(InstagramFrame, [{
            key: 'render',
            value: function render() {
                var styles = {
                    width: '100%',
                    border: '0',
                    overflow: 'hidden',
                    height: '400px'
                };

                return React.createElement(
                    'noindex',
                    null,
                    React.createElement('script', { src: '//instansive.com/widget/js/instansive.js' }),
                    React.createElement('iframe', {
                        //src="//instansive.com/widgets/2f2ea965452a93353f77df071b06a2f02cfcae4e.html"
                        src: '//instansive.com/widgets/25d3d7f5f809853073df9ced2a113c7e405a724b.html',
                        scrolling: 'no',
                        allowTransparency: 'true',
                        className: 'instansive-widget',
                        style: styles
                    })
                );
            }
        }]);

        return InstagramFrame;
    })(Component);

    exports['default'] = InstagramFrame;
    ;
    module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

    // removed by extract-text-webpack-plugin
    module.exports = {"root":"app__root___2mVqG","wrapper":"app__wrapper___f--Dk"};

/***/ },
/* 16 */
/***/ function(module, exports) {

    // removed by extract-text-webpack-plugin
    module.exports = {"push":"constants__push___3B_DS"};

/***/ },
/* 17 */
/***/ function(module, exports) {

    module.exports = require("lodash");

/***/ }
/******/ ])));