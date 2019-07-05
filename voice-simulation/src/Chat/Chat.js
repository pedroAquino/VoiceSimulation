import React from 'react';
import ChatToolBar from './components/ChatToolBar';
import { makeStyles } from '@material-ui/core/styles';
import ChatContainer from './containers/ChatContainer';

const useStyles = makeStyles(theme => ({
  toolBar: {
    top: 'auto',
    bottom: 0,
  },
}))

export default function Chat() {
    const classes = useStyles();
    return (
      <ChatContainer>
        {({ chatState }) => {
          console.log(chatState);
          return (
            <div>
              <ChatToolBar className={classes.toolBar} />
            </div>
          )
        }}
      </ChatContainer>
    )
};