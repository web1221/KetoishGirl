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
            <h4><Link to="/create">Add Race</Link></h4>
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
                {this.state.races.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.name}</Link></td>
                    <td>{board.mission}</td>
                    <td>{board.course}</td>
                    <td>{board.schedule}</td>
                    <td>{board.timing}</td>
                    <td>{board.address}</td>
                    <td>{board.restrooms}</td>
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
