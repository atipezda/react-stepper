'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this));

    _this.getStyles = _this.getStyles.bind(_this);
    return _this;
  }

  _createClass(Step, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props;
      var activeColor = _props.activeColor;
      var completeColor = _props.completeColor;
      var defaultColor = _props.defaultColor;
      var circleFontColor = _props.circleFontColor;
      var activeTitleColor = _props.activeTitleColor;
      var completeTitleColor = _props.completeTitleColor;
      var defaultTitleColor = _props.defaultTitleColor;
      var size = _props.size;
      var circleFontSize = _props.circleFontSize;
      var titleFontSize = _props.titleFontSize;
      var circleTop = _props.circleTop;
      var titleTop = _props.titleTop;
      var width = _props.width;
      var completeOpacity = _props.completeOpacity;
      var activeOpacity = _props.activeOpacity;
      var defaultOpcaity = _props.defaultOpcaity;
      var completeTitleOpacity = _props.completeTitleOpacity;
      var activeTitleOpacity = _props.activeTitleOpacity;
      var defaultTitleOpacity = _props.defaultTitleOpacity;
      var barStyle = _props.barStyle;


      return {
        step: {
          width: width + '%',
          display: 'table-cell',
          position: 'relative',
          paddingTop: circleTop
        },
        circle: {
          width: size,
          height: size,
          margin: '0 auto',
          backgroundColor: defaultColor,
          borderRadius: '50%',
          textAlign: 'center',
          padding: 1,
          fontSize: circleFontSize,
          color: circleFontColor,
          display: 'block',
          opacity: defaultOpcaity
        },
        activeCircle: {
          backgroundColor: activeColor,
          opacity: activeOpacity
        },
        completedCircle: {
          backgroundColor: completeColor,
          opacity: completeOpacity
        },
        index: {
          lineHeight: size + circleFontSize / 4 + 'px',
          color: circleFontColor
        },
        title: {
          marginTop: titleTop,
          fontSize: titleFontSize,
          fontWeight: '300',
          textAlign: 'center',
          display: 'block',
          color: defaultTitleColor,
          opacity: defaultTitleOpacity
        },
        activeTitle: {
          color: activeTitleColor,
          opacity: activeTitleOpacity
        },
        completedTitle: {
          color: completeTitleColor,
          opacity: completeTitleOpacity
        },
        leftBar: {
          position: 'absolute',
          top: circleTop + size / 2,
          height: 1,
          borderTopStyle: barStyle || 'solid',
          borderTopWidth: 1,
          borderTopColor: defaultColor,
          left: 0,
          right: '50%',
          marginRight: size / 2 + 1,
          opacity: defaultOpcaity
        },
        rightBar: {
          position: 'absolute',
          top: circleTop + size / 2,
          height: 1,
          borderTopStyle: barStyle || 'solid',
          borderTopWidth: 1,
          borderTopColor: defaultColor,
          right: 0,
          left: '50%',
          marginLeft: size / 2 + 1,
          opacity: defaultOpcaity
        },
        completedBar: {
          borderTopStyle: barStyle || 'solid',
          borderTopWidth: 1,
          borderTopColor: completeColor,
          opacity: completeOpacity
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var title = _props2.title;
      var index = _props2.index;
      var active = _props2.active;
      var completed = _props2.completed;
      var first = _props2.first;
      var isLast = _props2.isLast;
      var href = _props2.href;
      var onClick = _props2.onClick;


      var styles = this.getStyles();
      var circleStyle = Object.assign(styles.circle, completed ? styles.completedCircle : {}, active ? styles.activeCircle : {});
      var titleStyle = Object.assign(styles.title, completed ? styles.completedTitle : {}, active ? styles.activeTitle : {});
      var leftStyle = Object.assign(styles.leftBar, active || completed ? styles.completedBar : {});
      var rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

      return _react2.default.createElement(
        'div',
        { style: styles.step },
        _react2.default.createElement(
          'div',
          { style: circleStyle },
          active || completed ? _react2.default.createElement(
            'a',
            { href: href, onClick: onClick, style: styles.index },
            index + 1
          ) : _react2.default.createElement(
            'span',
            { style: styles.index },
            index + 1
          )
        ),
        active || completed ? _react2.default.createElement(
          'a',
          { href: href, onClick: onClick, style: titleStyle },
          title
        ) : _react2.default.createElement(
          'div',
          { style: titleStyle },
          title
        ),
        !first && _react2.default.createElement('div', { style: leftStyle }),
        !isLast && _react2.default.createElement('div', { style: rightStyle })
      );
    }
  }]);

  return Step;
}(_react.Component);

exports.default = Step;


Step.defaultProps = {
  activeColor: '#5096FF',
  completeColor: '#5096FF',
  defaultColor: '#E0E0E0',
  activeTitleColor: '#000',
  completeTitleColor: '#000',
  defaultTitleColor: '#757575',
  circleFontColor: '#FFF',
  size: 32,
  circleFontSize: 16,
  titleFontSize: 16,
  circleTop: 24,
  titleTop: 8
};

Step.propTypes = {
  width: _propTypes.PropTypes.number.isRequired,
  activeColor: _propTypes.PropTypes.string,
  completeColor: _propTypes.PropTypes.string,
  defaultColor: _propTypes.PropTypes.string,
  activeTitleColor: _propTypes.PropTypes.string,
  completeTitleColor: _propTypes.PropTypes.string,
  defaultTitleColor: _propTypes.PropTypes.string,
  circleFontColor: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.number,
  circleFontSize: _propTypes.PropTypes.number,
  titleFontSize: _propTypes.PropTypes.number,
  circleTop: _propTypes.PropTypes.number,
  titleTop: _propTypes.PropTypes.number,
  title: _propTypes.PropTypes.string,
  index: _propTypes.PropTypes.number,
  active: _propTypes.PropTypes.bool,
  completed: _propTypes.PropTypes.bool,
  first: _propTypes.PropTypes.bool,
  isLast: _propTypes.PropTypes.bool,
  completeOpacity: _propTypes.PropTypes.string,
  activeOpacity: _propTypes.PropTypes.string,
  defaultOpcaity: _propTypes.PropTypes.string,
  completeTitleOpacity: _propTypes.PropTypes.string,
  activeTitleOpacity: _propTypes.PropTypes.string,
  defaultTitleOpacity: _propTypes.PropTypes.string,
  barStyle: _propTypes.PropTypes.string
};