import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Toolbar, IconButton, Typography} from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import ImgHT from "../assets/img/PERFIL-02.jpeg"

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
    }));

function Navbar() {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>

                    <IconButton color="inherit">
                            <img src={ImgHT} width="40px" height="40px" className={classes.imagen}/>
                            </IconButton>
                </Toolbar>

            </AppBar>
            
        </div>
    );
}

export default Navbar;