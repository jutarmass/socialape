import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Home(props) {
  const [screams, setScreams] = useState(null);
  useEffect(() => {
    axios
      .get("/screams")
      .then((res) => {
        console.log(res.data);
        setScreams({
          screams: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={16}>
      <Grid item sm={8} xs={12}>
        <p>cont</p>
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>profile...</p>
      </Grid>
    </Grid>
  );
}

export default Home;
