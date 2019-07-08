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

const toolbarRef = React.createRef();

const ChatToolBar = ({ className, onMicIconClick, disabled }) => {
    const classes = useStyles();
    return (
        <AppBar ref={toolbarRef} tabIndex={0} position="fixed" color="primary" className={className}>
            <Toolbar>
              <Fab 
                    onClick={() => {
                      toolbarRef.current.focus();
                      onMicIconClick();
                    }}  
                    color="secondary" 
                    aria-label="Mic" 
                    className={classes.fabButton}
                    disabled={disabled}>
                  <MicIcon />
              </Fab>
            </Toolbar>
        </AppBar>
    );
};

export default ChatToolBar;