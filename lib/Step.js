Object.defineProperty(exports, '__esModule', {
  value: true
});

const _createClass = (function () {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}());

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      `Super expression must either be null or a function, not ${typeof superClass}`
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
  }
}

const Step = (function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    const _this = _possibleConstructorReturn(
      this,
      (Step.__proto__ || Object.getPrototypeOf(Step)).call(this)
    );

    _this.getStyles = _this.getStyles.bind(_this);
    return _this;
  }

  _createClass(Step, [
    {
      key: 'getStyles',
      value: function getStyles() {
        const _props = this.props;
        const { activeColor } = _props;
        const { completeColor } = _props;
        const { defaultColor } = _props;
        const { circleFontColor } = _props;
        const { activeTitleColor } = _props;
        const { completeTitleColor } = _props;
        const { defaultTitleColor } = _props;
        const { size } = _props;
        const { circleFontSize } = _props;
        const { titleFontSize } = _props;
        const { circleTop } = _props;
        const { titleTop } = _props;
        const { width } = _props;
        const { completeOpacity } = _props;
        const { activeOpacity } = _props;
        const { defaultOpacity } = _props;
        const { completeTitleOpacity } = _props;
        const { activeTitleOpacity } = _props;
        const { defaultTitleOpacity } = _props;
        const { barStyle } = _props;
        const { defaultBarColor } = _props;
        const { completeBarColor } = _props;
        const { defaultBorderColor } = _props;
        const { completeBorderColor } = _props;
        const { activeBorderColor } = _props;
        const { defaultBorderStyle } = _props;
        const { completeBorderStyle } = _props;
        const { activeBorderStyle } = _props;
        const { lineMarginOffset } = _props;
        const { defaultBorderWidth } = _props;

        return {
          step: {
            width: `${width}%`,
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
            cursor: 'pointer',
            fontSize: circleFontSize,
            color: circleFontColor,
            display: 'block',
            opacity: defaultOpacity,
            borderWidth: defaultBorderColor ? defaultBorderWidth : 0,
            borderColor: defaultBorderColor,
            borderStyle: defaultBorderStyle
          },
          activeCircle: {
            backgroundColor: activeColor,
            opacity: activeOpacity,
            borderWidth: activeBorderColor ? defaultBorderWidth : 0,
            borderColor: activeBorderColor,
            borderStyle: activeBorderStyle
          },
          completedCircle: {
            backgroundColor: completeColor,
            opacity: completeOpacity,
            borderWidth: completeBorderColor ? defaultBorderWidth : 0,
            borderColor: completeBorderColor,
            borderStyle: completeBorderStyle
          },
          index: {
            lineHeight: `${size + circleFontSize / 4}px`,
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
            borderTopStyle: barStyle,
            borderTopWidth: 1,
            borderTopColor: defaultBarColor,
            left: 0,
            right: '50%',
            marginRight: size / 2 + lineMarginOffset,
            opacity: defaultOpacity
          },
          rightBar: {
            position: 'absolute',
            top: circleTop + size / 2,
            height: 1,
            borderTopStyle: barStyle,
            borderTopWidth: 1,
            borderTopColor: defaultBarColor,
            right: 0,
            left: '50%',
            marginLeft: size / 2 + lineMarginOffset,
            opacity: defaultOpacity
          },
          completedBar: {
            borderTopStyle: barStyle,
            borderTopWidth: 1,
            borderTopColor: completeBarColor,
            opacity: completeOpacity
          }
        };
      }
    },
    {
      key: 'render',
      value: function render() {
        const _props2 = this.props;
        const { title } = _props2;
        const { icon } = _props2;
        const { index } = _props2;
        const { active } = _props2;
        const { completed } = _props2;
        const { first } = _props2;
        const { isLast } = _props2;
        const { href } = _props2;
        const { onClick } = _props2;

        const styles = this.getStyles();
        const circleStyle = Object.assign(
          styles.circle,
          completed ? styles.completedCircle : {},
          active ? styles.activeCircle : {}
        );
        const titleStyle = Object.assign(
          styles.title,
          completed ? styles.completedTitle : {},
          active ? styles.activeTitle : {}
        );
        const leftStyle = Object.assign(
          styles.leftBar,
          active || completed ? styles.completedBar : {}
        );
        const rightStyle = Object.assign(
          styles.rightBar,
          completed ? styles.completedBar : {}
        );

        const stepContent = icon
          ? _react2.default.createElement('img', { src: icon, alt: index + 1 })
          : index + 1;

        return _react2.default.createElement(
          'div',
          { style: styles.step },
          _react2.default.createElement(
            'div',
            { style: circleStyle, href, onClick },
            active || completed
              ? _react2.default.createElement(
                  'a',
                  { href, onClick, style: styles.index },
                  stepContent
                )
              : _react2.default.createElement(
                  'span',
                  { href, onClick, style: styles.index },
                  stepContent
                )
          ),
          active || completed
            ? _react2.default.createElement(
                'a',
                { href, onClick, style: titleStyle },
                title
              )
            : _react2.default.createElement(
                'div',
                { style: titleStyle },
                title
              ),
          !first && _react2.default.createElement('div', { style: leftStyle }),
          !isLast && _react2.default.createElement('div', { style: rightStyle })
        );
      }
    }
  ]);

  return Step;
}(_react.Component));

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
  titleTop: 8,
  defaultBarColor: '#E0E0E0',
  barStyle: 'solid',
  borderStyle: 'solid',
  lineMarginOffset: 4,
  defaultBorderWidth: 3
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
  defaultOpacity: _propTypes.PropTypes.string,
  completeTitleOpacity: _propTypes.PropTypes.string,
  activeTitleOpacity: _propTypes.PropTypes.string,
  defaultTitleOpacity: _propTypes.PropTypes.string,
  barStyle: _propTypes.PropTypes.string,
  defaultBarColor: _propTypes.PropTypes.string,
  completeBarColor: _propTypes.PropTypes.string,
  defaultBorderColor: _propTypes.PropTypes.string,
  completeBorderColor: _propTypes.PropTypes.string,
  activeBorderColor: _propTypes.PropTypes.string,
  defaultBorderStyle: _propTypes.PropTypes.string,
  completeBorderStyle: _propTypes.PropTypes.string,
  activeBorderStyle: _propTypes.PropTypes.string,
  lineMarginOffset: _propTypes.PropTypes.number,
  defaultBorderWidth: _propTypes.PropTypes.number
};
