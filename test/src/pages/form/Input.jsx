import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    defaultValue: '',
    value: '',
    placeholder: '',
    onChange: null,
  };

  constructor(...args) {
    super(...args);
    const { value, defaultValue } = this.props;
    this.state = {
      propValue: value,
      value: value || defaultValue,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value } = this.state;
    return nextState.value !== value;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.propValue) {
      return { propValue: nextProps.value, value: nextProps.value };
    }
    return null;
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    console.log({ value });
    return (
      <input type="input" placeholder={placeholder} value={value} onChange={this.handleChange} />
    );
  }
}

export default Input;
