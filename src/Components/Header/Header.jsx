import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { AppBar,Toolbar,Typography,InputBase,Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStlyes from './style.js';
const Header = () =>{
    const classes=useStlyes();
    return(
       <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography varient="h5" className={classes.title}>
                     Travel Companion
                </Typography>
                <Box display="flex">
                <Typography varient="h6" className={classes.title}>
                     Explore New Places
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                                <SearchIcon />
                        </div>
                        <InputBase placeholder="Explore New Places..." classes={{root:classes.inputRoot,input:classes.inputInput }}/>
                    </div>
                {/* </Autocomplete> */}
                </Box>
            </Toolbar>
       </AppBar>
    );
}

export default Header;