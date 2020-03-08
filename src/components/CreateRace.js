import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class CreateRace extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('races');
    this.state = {
      name: '',
      mission: '',
      course: '',
      schedule: '',
      timing: '',
      restrooms: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, mission, course, schedule, timing, address, restrooms } = this.state;

    this.ref.add({
      name,
      mission,
      course,
      schedule,
      timing,
      address,
      restrooms
    }).then((docRef) => {
      this.setState({
        name: '',
        mission: '',
        course: '',
        schedule: '',
        timing: '',
        address: '',
        restrooms: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding race: ", error);
    });
  }

  render() {
    const { name, mission, course, schedule, timing, address, restrooms } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD RACE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Race List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Race:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Race Name" />
              </div>
              <div class="form-group">
                <label for="mission">Pay it Forward Mission:</label>
                <input type="text" class="form-control" name="mission" value={mission} onChange={this.onChange} placeholder="Pay it Forward Mission" />
              </div>
              <div class="form-group">
                <label for="description">Course Description:</label>
                <textArea class="form-control" name="course" onChange={this.onChange} placeholder="Course Description" cols="80" rows="3">{course}</textArea>
              </div>
              <div class="form-group">
                <label for="schedule">Race Day Schedule:</label>
                <textArea class="form-control" name="schedule" onChange={this.onChange} placeholder="Race Day Schedule" cols="80" rows="3">{schedule}</textArea>
              </div>
              <div class="form-group">
                <label for="timing">Timing Information:</label>
                <textArea class="form-control" name="timing" onChange={this.onChange} placeholder="Timing Information" cols="80" rows="3">{timing}</textArea>
              </div>
              <div class="form-group">
                <label for="address">Event Address:</label>
                <textArea class="form-control" name="address" onChange={this.onChange} placeholder="Event Address" cols="80" rows="3">{address}</textArea>
              </div>
              <div class="form-group">
                <label for="restrooms">Restrooms:</label>
                <textArea class="form-control" name="restrooms" onChange={this.onChange} placeholder="Restrooms" cols="80" rows="3">{restrooms}</textArea>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRace;
