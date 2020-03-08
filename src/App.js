import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('races');
    this.unsubscribe = null;
    this.state = {
      races: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const races = [];
    querySnapshot.forEach((doc) => {
      const { name, mission, course, schedule, timing, address, restrooms } = doc.data();
      races.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        mission,
        course,
        schedule,
        timing,
        address,
        restrooms
      });
    });
    this.setState({
      races
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              RACE LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/createrace">Add Race</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Race Name</th>
                  <th>Pay it Forward Mission</th>
                  <th>Course Description</th>
                  <th>Race Day Schedule</th>
                  <th>Timing Information</th>
                  <th>Event Address</th>
                  <th>Restrooms</th>
                </tr>
              </thead>
              <tbody>
                {this.state.races.map(race =>
                  <tr>
                    <td><Link to={`/showrace/${race.key}`}>{race.name}</Link></td>
                    <td>{race.mission}</td>
                    <td>{race.course}</td>
                    <td>{race.schedule}</td>
                    <td>{race.timing}</td>
                    <td>{race.address}</td>
                    <td>{race.restrooms}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
