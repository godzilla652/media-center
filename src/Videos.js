import React from 'react'
import {useState} from 'react'

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
  

export default function Videos(props){
    const selectedDate = '10/21/1991'
    function handleDateChange(time){
      alert(1)
      console.log(time)
    }
    const [personName, setPersonName] = useState([])
    const handleChange = event => {
    setPersonName(event.target.value);
    };
  
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
      
    return(
        <div>
                        <Grid item xs={12} className={classes.mBottom}>
              <FormControl fullWidth>
                <Input
                  id='search_by_name_input'
                  name='video["name"]'
                  placeholder="Search by name"
                  className={classes.input}
                  inputProps={{
                  'aria-label': 'description',
                  }}
                  startAdornment={<InputAdornment position="start"><SearchOutlined /></InputAdornment>}
                />
                </FormControl>
              </Grid>



              
              <Grid container spacing={3} className={classes.controlsPaddingCenter}>

              <Grid item className={classes.centered} className={classes.addButtonSideSpacing}>
                <Link to='/add_video'>
                <Fab color="secondary" aria-label="edit" className={classes.fab}>
                  <Add />
                </Fab>
                </Link>
              </Grid>

              <Grid item className={classes.bottomed}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.avoidMargin}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-from"
                  label="From"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-to"
                  label="To"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              </Grid>




                  <Grid item style={{flexGrow: 1}} className={classes.bottomed}>
                  <FormControl fullWidth className={classes.margined}>
                    <InputLabel id="demo-mutiple-chip-label">Categories</InputLabel>
                    <Select
                      labelId="demo-mutiple-chip-label"
                      id="demo-mutiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div>
                          {selected.map(value => (
                            <Chip key={value} label={value} className={classes.chip} />
                          ))}
                        </div>
                      )}
                    >
                      {names.map(name => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  </Grid>
      
            </Grid>
        </div>
    )
}