import React, { Component } from 'react';
//import { connect } from 'react-redux'
import { AutoCompleteAddress } from './AutoCompleteAddress';
import MyAutoComplete from './MyAutoComplete';

import HomeMap from './HomeMap';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Box, CardMedia, Card, CardContent } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import HomeInfo from "./HomeInfo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    marginTop: 100
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cardMediaImg: {
    height: 131,
    weight: 43,
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="div">
              <Box fontStyle="normal" fontSize="h5.fontSize" fontWeight="fontWeightBold" m={1}>
                Address Labs
              </Box>
              <Box fontStyle="normal" m={1}>
                Community Contributed Open Datasets for Australian Addresses
              </Box>
            </Typography>

            <EditIcon />
            {/* <!input type="text" id="rapidAddress" size="100" placeholder="Type in address here" className="autocomplete" />

            <Typography variant="body1" align="right">
              Address Type Ahead lookup API is powered by
              <a href="https://harmonyrightaddress.com" target="_blank" rel="noopener noreferrer" >
                <img className="responsive-img" src="HARMONYRightAddressSmall.png" alt="Harmony RightAddress" />
              </a>
            </Typography>

            <AutoCompleteAddress />
            <br /> */}
            <MyAutoComplete />
            <Typography variant="body1" align="right">
              Address Type Ahead lookup API is powered by
              <a href="https://harmonyrightaddress.com" target="_blank" rel="noopener noreferrer" >
                <img className="responsive-img" src="HARMONYRightAddressSmall.png" alt="Harmony RightAddress" />
              </a>
            </Typography>

            <AutoCompleteAddress />

          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <HomeInfo />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <HomeMap name="HomeMap" lat="-33.8688" lng="151.2093" zoom="16" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

