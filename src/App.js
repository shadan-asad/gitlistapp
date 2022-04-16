import React, { Component } from 'react';
import './App.css';
import MyGrid from './components/MyGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Grid from '@mui/material/Grid';


class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Grid container height={'100%'} direction = {'column'} alignItems={'stretch'}>
          <Grid item >
            <Navbar/>
          </Grid>
          <Grid item height={555}>
            <MyGrid/>
          </Grid>
          <Grid item>
            <Footer/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
