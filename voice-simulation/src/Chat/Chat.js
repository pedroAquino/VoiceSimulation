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
        {({ chatState }) => {
          console.log(chatState);
          return (
            <div>
                <MessageList 
                  {...chatState}
                />
                <SpeechContainer>
                  {({ speechState, startRecording }) => {
                    console.log(speechState);
                    return (
                      <ChatToolBar 
                        className={classes.toolBar}
                        onMicIconClick={startRecording}
                        disabled={speechState.speaking}
                      />
                    );
                  }}
                </SpeechContainer>
            </div>
          )
        }}
      </ChatContainer>
    )
};