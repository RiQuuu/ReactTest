'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var NavLinks = (function (_React$Component) {
    _inherits(NavLinks, _React$Component);

    function NavLinks() {
        _classCallCheck(this, NavLinks);

        _get(Object.getPrototypeOf(NavLinks.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(NavLinks, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var visibleLinks = this.props.pages.filter(function (page) {
                return page.nav === true && page.auth === false;
            });

            var linkComponents = visibleLinks.map(function (page) {
                var cssClass = page.name === _this.props.route ? 'link active' : 'link';
                return _react2['default'].createElement(
                    'li',
                    { className: cssClass, key: page.name },
                    page.title
                );
            });

            return _react2['default'].createElement(
                'div',
                { className: '_navlinks' },
                _react2['default'].createElement(
                    'ul',
                    null,
                    linkComponents
                )
            );
        }
    }]);

    return NavLinks;
})(_react2['default'].Component);

exports['default'] = NavLinks;

NavLinks.propTypes = {
    pages: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        auth: _react2['default'].PropTypes.bool,
        nav: _react2['default'].PropTypes.bool,
        name: _react2['default'].PropTypes.string.isRequired,
        title: _react2['default'].PropTypes.string.isRequired
    })).isRequired,
    route: _react2['default'].PropTypes.string.isRequired
};
module.exports = exports['default'];