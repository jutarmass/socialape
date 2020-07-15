import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class home extends Component {
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
