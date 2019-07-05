import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '100vh',
        marginTop: -108,
        padding: '0px 24px 0px 24px'
    },
    message: {
        background: '#fff',
        padding: 8,
        borderRadius: 12,
        position: 'relative',
        marginBottom: 24,
        '&:after': {
            content: "''",
            position: 'absolute',
            borderStyle: 'solid',
            borderWidth: '0 9px 11px',
            borderColor: '#fff transparent',
            display: 'block',
            width: 0,
            zIndex: 1,
            top: -11,
            left: 10
        }
    },
    messageRight: {
        background: '#fff',
        padding: 8,
        borderRadius: 12,
        position: 'relative',
        marginBottom: 24,
        '&:after': {
            content: "''",
            position: 'absolute',
            borderStyle: 'solid',
            borderWidth: '0 9px 11px',
            borderColor: '#fff transparent',
            display: 'block',
            width: 0,
            zIndex: 1,
            top: -11,
            right: 10
        }
    }
}));

const Message = ({ content, isVisible, className }) => isVisible ? (
    <div className={className}>
        <p>{content}</p>
    </div>
) : null;

export default function MessageList({ messages }) {
    const classes = useStyles();
    return (
        <div className={classes.root} id="messages">
            { messages.map(msg => (
                <Message 
                    className={msg.from === 'DT' ? classes.message : classes.messageRight}
                    key={msg.id} 
                    content={msg.content} 
                    isVisible={msg.isVisible}
                />
            ))}
        </div>
    );
};