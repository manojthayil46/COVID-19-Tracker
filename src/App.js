import React, { Component } from 'react';
import {fetchApi} from './components/API/index';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Charts from './components/Chart/Chart';

class App extends Component {

  state = {
    data : {}
  }

async componentDidMount() {
 const data = await fetchApi();
 console.log(data);
 this.setState({data : data})

  }
  render() {
    return (
      <div>
        <Cards data = {this.state.data} />
        <Charts />

      </div>
    );
  }
}

export default App;