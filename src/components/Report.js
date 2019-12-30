import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    marginTop: 100
  },
}));

function Report() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Typography component="div">
        <Box fontStyle="normal" fontSize="h5.fontSize" fontWeight="fontWeightBold" align="center" m={1}>
          Report
        </Box>
      </Typography>
    </div>
  );
};

export default Report;