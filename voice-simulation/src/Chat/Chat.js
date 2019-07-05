import React from 'react';
import ChatToolBar from './components/ChatToolBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolBar: {
    top: 'auto',
    bottom: 0,
  },
}))

export default function Chat() {
    const classes = useStyles();
    return (
        <div>
            <ChatToolBar className={classes.toolBar} />
        </div>
    )
};