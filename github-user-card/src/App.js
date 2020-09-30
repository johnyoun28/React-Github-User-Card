import React from 'react';
import './App.css';
import axios from 'axios';
import Data from './components/Data';
import Followers from './components/Followers';

const gitURL = 'https://api.github.com/users/johnyoun28';
const followersURL = 'https://api.github.com/users/johnyoun28/followers';

class App extends React.Component {
  state = {
    gitData: [],
    gitFollowers: [],
  };

  componentDidMount() {
    axios
      .get(gitURL)
      .then((res) => {
        console.log(res.data);
        this.setState({
          gitData: res.data,
        });
      })
      .catch((err) => {
        console.log('error', err);
      });

    axios
      .get(followersURL)
      .then((res) => {
        console.log(res.data);
        this.setState({
          gitFollowers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Github</h1>
        <Data gitData={this.state.gitData} />
        <Followers gitFollowers={this.state.gitFollowers} />
      </div>
    );
  }
}

export default App;
