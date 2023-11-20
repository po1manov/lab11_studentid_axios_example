// PersonList.js

import React, { Component } from 'react';

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not o k');
        }
        return response.json();
      })
      .then(data => {
        const persons = data.results;
        this.setState({ persons });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const personsList = this.state.persons.map(person => (
      <li key={person.login.uuid} key={person.login.uuid}>
        <img src={person.picture.medium} alt={person.name.first} />
        <div key={person.login.uuid}>
          <p><strong>Name:</strong> {person.name.first} {person.name.last}</p>
          <p><strong>Gender:</strong> {person.gender}</p>
          <p><strong>Address:</strong> {person.location.street.name}, {person.location.city}</p>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>Birthday:</strong> {new Date(person.dob.date).toLocaleDateString()}</p>
          <p><strong>Age:</strong> {person.dob.age}</p>
          <p><strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}</p>
          <p><strong>Phone:</strong> {person.phone}</p>
        </div>
      </li>
    ));

    return (
      <div>
        <h2>Person List</h2>
        <ul>{personsList}</ul>
      </div>
    );
  }
}

export default PersonList;
