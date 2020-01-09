import React from 'react'
import PropTypes from 'prop-types'

const UserTemplate = props => {
  return <div>User Template</div>
}

UserTemplate.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(['John', 'Jane'])
  ]),
  lastname: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  russian: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  mother: PropTypes.string.isRequired,
  father: function(props, propName, componentName) {
    if (!props[propName]) {
      return new Error(`${propName} does not exist`)
    }
  }
}

export default UserTemplate
