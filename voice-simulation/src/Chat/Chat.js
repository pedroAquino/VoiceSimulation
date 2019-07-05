import React from 'react';
import ChatToolBar from './components/ChatToolBar';
import { makeStyles } from '@material-ui/core/styles';
import ChatContainer from './containers/ChatContainer';
import MessageList from './components/MessageList';
import SpeechContainer from './containers/SpeechContainer';

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
        {({ chatState, addMessage }) => {
          return (
            <React.Fragment>
                <MessageList 
                  {...chatState}
                />
                <SpeechContainer onResultRecord={addMessage} >
                  {({ speechState, startRecording }) => {
                    return (
                      <ChatToolBar 
                        className={classes.toolBar}
                        onMicIconClick={startRecording}
                        disabled={speechState.speaking}
                      />
                    );
                  }}
                </SpeechContainer>
            </React.Fragment>
          )
        }}
      </ChatContainer>
    )
};