import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class ShowRace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      race: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('races').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          race: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('races').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Race List</Link></h4>
            <h3 class="panel-title">
              {this.state.race.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Pay it Forward Mission:</dt>
              <dd>{this.state.race.mission}</dd>
              <dt>Course Description:</dt>
              <dd>{this.state.race.course}</dd>
              <dt>Race Day Schedule:</dt>
              <dd>{this.state.race.schedule}</dd>
              <dt>Timing Information</dt>
              <dd>{this.state.race.timing}</dd>
              <dt>Event Address:</dt>
              <dd>{this.state.race.address}</dd>
              <dt>Restrooms:</dt>
              <dd>{this.state.race.restrooms}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRace;
