import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  render() {
    const { type } = this.props;
    let render;

    switch (type) {
      case 'text':
      default:
        render = (
          <input
            {...this.props}
          />
        );
        break;
    }

    return render;
  }
}

InputComponent.defaultProps = {
  type: 'text',
};

InputComponent.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};


export default InputComponent;
