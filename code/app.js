import axios from 'axios';
import ReactDOM from 'react-dom';
import React from 'react';

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      consultant: '',
    }
  }

  componentWillMount() {
    axios.get('https://jigsaw.thoughtworks.net/api/people/greis', {
      headers: {'Authorization': ''}
    }).then(response => {
      this.setState({
        consultant: response.data,
      });
    });
  }

  render() {
    if (this.state.consultant) {
      return <Consultant consultant={this.state.consultant} />;
    }
    return <div>loading</div>;
  }
}

class Consultant extends React.Component {
  render() {
    return (
      <div>
        {this.props.consultant.preferredName}
        <ConsultantDetails
          grade={this.props.consultant.grade.name}
          role={this.props.consultant.role.name}
        />
      </div>
    );
  }
}

class ConsultantDetails extends React.Component {
  render() {
    return <div>{this.props.grade} {this.props.role}</div>;
  }
}

ReactDOM.render(
  <ProfilePage />,
  document.getElementById('consultant-container')
);
