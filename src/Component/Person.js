import React, { Component } from 'react'

class Person extends Component {
  render() {
    const { img, name, job, body } = this.props.people;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
      <div className="person">
        <img src={url} alt="Thumb" />
        <div>
          <h4>Name</h4> {name}
          <h4>Job</h4>{job}
          <p style={{ marginTop: '10px' }}>{body}</p>
        </div>
      </div>
    )
  }
}
export default Person;