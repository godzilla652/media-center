import React from "react"
import { useState } from 'react'
import { connect } from 'react-redux'


import TopMenu from './TopMenu.js'
import BackMenu from './BackMenu.js'
import BackMenuItem from './BackMenuItem.js'

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";


import MenuIcon from '@material-ui/icons/Menu';
import { AcUnit } from '@material-ui/icons'
import { ArrowBackIos } from '@material-ui/icons'
import { OndemandVideo } from '@material-ui/icons'
import { Add } from '@material-ui/icons'
import { PhotoCamera } from '@material-ui/icons'
import { WifiTethering } from '@material-ui/icons'
import { ArrowBackIosOutlined } from '@material-ui/icons'
import { SearchOutlined } from '@material-ui/icons'

import Videos from './Videos'
import AddVideo from './AddVideo'
import Photos from './Photos'
import Broadcasts from './Broadcasts'



const names = [
  'Competitions',
  'News',
  'Educational',
  'Highlights',
  'Promo',
  'For Fun',
  'Interview',
  'Other',
];

    



function App(props){
  const selectedDate = '10/21/1991'
  function handleDateChange(time){
    alert(1)
    console.log(time)
  }


  const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  
      color: 'red',
      boxShadow: 'none',
      borderBottom: '1px solid red',
      borderRadius: '0px',
    },
    grid_logotype: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      borderBottom: '1px solid #ccc',
  
      height: '8vh'
    },
    row: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    iconSpacing:{
      marginRight: theme.spacing(2),
      color: '#333'
    },
    title: {
      color: theme.palette.text.secondary,
    },
    gridInnerPadding: {
      
      
      paddingTop: theme.spacing(6),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    backMenu: {
      paddingTop: theme.spacing(4),
      borderRight: '1px solid #ccc',
      height: '92vh',
    },

    flexRow: {
      display: 'flex',
    },
  
    sideMenu: {
      position: 'fixed',
      display: props.isLeftMenu ? 'block' : 'none'
    },
    grey: {
      color: '#333'
    },
    centered: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    bottomed: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    avoidMargin: {
      marginBottom: 0
    },
    margined: {
      marginBottom: theme.spacing(1)
    },
    contentOutput: {
      height: '200vh',
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(16)
    },
    mBottom: {
      marginBottom: theme.spacing(8)
    },
    controlsPaddingCenter: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    addButtonSideSpacing: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  }));


  const classes = useStyles();

  const [personName, setPersonName] = useState([])
  const handleChange = event => {
    setPersonName(event.target.value);
  };

  // let match = useRouteMatch();

  return(
    <Router>
    <div className={classes.root}>


      <Grid container>
        <Grid container className={classes.sideMenu}>
          <Grid item xs={3}>

            <Grid item xs={12} className={classes.grid_logotype}>
              

              <BackMenuItem title='ISSF-TV' stable>
                <OndemandVideo fontSize='large' className={classes.iconSpacing}/>
              </BackMenuItem>
            </Grid>


            <Grid item xs={12} className={classes.backMenu}>
              <Link to='/videos'>
              <BackMenuItem title='Videos'>
                <OndemandVideo fontSize='large' className={classes.iconSpacing}/>
              </BackMenuItem>
              </Link>

              <Link to='/photos'>
              <BackMenuItem title='Photos'>
                <PhotoCamera fontSize='large' className={classes.iconSpacing}/>
              </BackMenuItem>
              </Link>

              <Link to='/broadcasts'>
              <BackMenuItem title='Broadcasts'>
                <WifiTethering fontSize='large' className={classes.iconSpacing}/>
              </BackMenuItem>
              </Link>

            </Grid>
          </Grid>
        </Grid>




        { props.isLeftMenu && <Grid item xs={3}></Grid> }

        <Grid item xs={props.lenLeftMenu}>
          
          <Grid item xs={12}>
            <TopMenu />
          </Grid>

          
          <Grid container className={classes.backMenu}>
            
            { !props.isLeftMenu &&
            <Grid item xs={1}>
              <Link to='/videos' >
                <BackMenuItem>
                  <OndemandVideo fontSize='large' className={classes.grey}/>
                </BackMenuItem>
              </Link>
              <Link to='/photos' >
              <BackMenuItem>
                <PhotoCamera fontSize='large' className={classes.grey}/>
              </BackMenuItem>
              </Link>
              <Link to='/broadcasts' >
              <BackMenuItem>
                <WifiTethering fontSize='large' className={classes.grey}/>
              </BackMenuItem>
              </Link>
            </Grid>
            }
            

            <Grid item xs={11} className={classes.contentOutput}>
              





            <Grid item xs={12}>
              <Switch>
                <Route path='/videos'>
                  <Videos />
                </Route>
                <Route path='/add_video'>
                  <AddVideo />
                </Route>
                <Route path='/photos'>
                  <Photos />
                </Route>
                <Route path='/broadcasts'>
                  <Broadcasts />
                </Route>
              </Switch>
            </Grid>


            </Grid>

          
          </Grid>







        </Grid>














      </Grid>    
    </div>
    </Router>
  )
}


function mapStateToProps (state) {
  return {
    lenLeftMenu: state.lenLeftMenu,
    isLeftMenu: state.isLeftMenu
  }
}
function mapDispatchToProps (dispatch) {
  return {
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

