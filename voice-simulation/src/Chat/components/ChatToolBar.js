import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const ChatToolBar = ({ className }) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="primary" className={className}>
            <Toolbar>
              <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
                  <MicIcon />
              </Fab>
            </Toolbar>
        </AppBar>
    );
};

export default ChatToolBar;