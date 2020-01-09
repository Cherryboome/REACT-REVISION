import React, { Component } from 'react'
import UserTemplate from './user_template'

class User extends Component {
  state = {
    name: 'John',
    lastname: 'Doe',
    age: 32,
    hobbies: ['basketball', 'gym'],
    russian: false,
    message() {
      console.log('patience is the key to survival')
    },
    car: { brand: 'Audi', year: 2020 },
    mother: 'Teressa'
  }

  render() {
    return (
      <div>
        <UserTemplate {...this.state} />
      </div>
    )
  }
}

export default User
