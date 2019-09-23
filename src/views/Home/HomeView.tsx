import React from 'react';
import { Grid, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    }
  })
);


const HomeView: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Home
    </div>
  )
};

export default HomeView;