import React from 'react';
import { speechStateFactory } from '../services/speechStateFactory';

class SpeechContainer extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.speechRecognition = new window.SpeechRecognition();
        this.speechRecognition.onresult = this.handleResultRecord.bind(this);

        this.handleStartRecording = this.handleStartRecording.bind(this);
    }

    state = speechStateFactory({
        browserEnabled: window.SpeechRecognition ? true : false
    });

    handleStartRecording() {
        this.speechRecognition.start();
        setTimeout(() => {
            this.setState({
                speaking: true,
                result: ''
            });
        }, 1000);
    }

    handleResultRecord(event) {
        const speechToText = event.results[0][0].transcript;
        this.setState({
            speaking: false,
            result: speechToText
        });
    }
    
    render() {
        return this.props.children({
            speechState: this.state,
            startRecording: this.handleStartRecording
        });
    }
}

export default SpeechContainer;