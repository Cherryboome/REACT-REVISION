import React from 'react'

const Auth = props => {
  const pass = 'password123'

  if (pass !== 'password123') {
    return <div>You are not authorized!</div>
  } else {
    return props.children
  }
}

export default Auth
