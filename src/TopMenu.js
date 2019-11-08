import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import { ExitToApp } from '@material-ui/icons';

import { connect } from 'react-redux'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  grid_menu: {
      height: '8vh',
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
  }
}));

function TopMenu(props) {
  const classes = useStyles();
  
  function menuToggle(){
    props.isLeftMenu ? props.menuHide() : props.menuShow()
    
  }
  function login(){
    // alert('login')
  }
  function logout(){
    // alert(logout)
  }
  return (
      <AppBar position="static" className={classes.grid_menu}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={menuToggle}>
            <MenuIcon fontSize='large' />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Videos
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={login}>
            <AccountCircle fontSize='large' />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={logout}>
            <ExitToApp fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

function mapStateToProps (state) {
  return {
    isLeftMenu: state.isLeftMenu
  }
}
function mapDispatchToProps (dispatch) {
  return {
    menuShow: () => dispatch({ type: "MENU_SHOW" }),
    menuHide: () => dispatch({ type: "MENU_HIDE" }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);