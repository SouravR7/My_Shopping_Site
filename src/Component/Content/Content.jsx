import React from "react";
import CoffeCard from "../Common/CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "../../DataStatic/constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles  = makeStyles({
    
  container: {
    marginTop:"10px"
  }

})

const Content = () => {

  const classes = useStyles();

  const getCoffeMakerCard = coffeMakerObj => {

    return (
      <Grid item xs={12} sm={4} >
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}className={classes.container} >
      {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;
