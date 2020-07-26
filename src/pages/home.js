import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
class home extends Component {
  state = {
    screams: null
  }
  componentDidMount() {
    axios.get('/screams')
    .then(res => {
      console.log(res);
      this.setState({
        screams: res.data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          <p>content...</p>
          
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>profile...</p>
        </Grid>
      </Grid>
    )
  }
}

export default home
