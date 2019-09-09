import React, { Component } from 'react'
import Person from './Person'

class PersonList extends Component {
  state = {
    peoples: [
      {
        img: 22, name: 'Akash', job: 'Developer'
      },
      {
        img: 34, name: 'Aamir', job: 'Developer', body: ' To define a state of any Class we can use the sample format below'
      },
      {
        img: 56, name: 'Rahul', job: 'Designer'
      }
    ]
  }
  render() {
    const { peoples } = this.state;
    return (
      <div>
        <center style={{ marginTop: '10px' }}>
          <h2><span style={{ color: 'red' }}>Friend </span>List</h2>
        </center>
        {
          peoples.map(people => (
            <Person people={people} />
          ))
        }
      </div >
    )
  }

}
export default PersonList;