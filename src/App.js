import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ToolbarMenu from "./components/ToolbarMenu";
import { Button, MenuItem } from "@material-ui/core";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Report from './components/Report';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  function onLogin() {
    alert("Login TBD");
  }
  function onSignup() {
    alert("Signup TBD");
  }

  return (
    <BrowserRouter>
      <div className="App">

        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              AddressLab
            </Typography>

            <ToolbarMenu
              render={collapsed => {
                return collapsed
                  ? [
                    <Link to="/" key="home">
                      <MenuItem key="home" >
                        Home
                  </MenuItem>
                    </Link>,
                    <Link to="/report" key="report">
                      <MenuItem key="report" >
                        Report
                  </MenuItem>
                    </Link>
                  ]
                  : [
                    <Button key="home" component={Link} to="/" style={{ color: "white" }}>Home</Button>,
                    <Button key="report" component={Link} to="/report" style={{ color: "white" }}>Report</Button>
                  ];
              }}
            />
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Report" component={Report} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
