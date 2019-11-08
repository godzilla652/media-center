import React from 'react'
import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';






export default function BackMenuItem({children, title, stable}){
    
    const [color, setColor] = useState('none')

    const useStyles = makeStyles(theme => ({
        row: {
            display: 'flex',
            justifyContent: title != undefined ? 'flex-start' : 'center',
            alignItems: 'center',
            padding: theme.spacing(3),
            backgroundColor: color
        },
        grey: {
            color: '#333',
            textDecorationStyle: 'none',
            cursor: stable ? 'default' : 'pointer'
        }
    }))
    
    

    function highlight(){
        setColor('#ccc')
    }


    function darken(){
        setColor('none')
    }


    const classes = useStyles()

    return(
        <Box className={classes.row} onMouseEnter={stable ? null : highlight} onMouseLeave={ stable ? null : darken} >
            {children}
            { title != undefined &&
                <Typography variant="h5" className={classes.grey}>
                    {title}
                </Typography>
            }
        </Box>
        
    )
}



