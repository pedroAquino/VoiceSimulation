import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column-reverse',
        minHeight: '100vh'
    },
    messages: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 108,
        overflowY: 'scroll',
        padding: '0px 24px 0px 24px'
    },
    message: {
        background: '#fff',
        padding: 8,
        borderRadius: 12,
        position: 'relative',
        marginBottom: 24,
        '& > p': {
            marginTop: 4
        },
        '& > span': {
            fontWeight: 'bold'
        },
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
        textTransform: 'capitalize',
        '& > p': {
            marginTop: 4
        },
        '& > span': {
            fontWeight: 'bold'
        },
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

const Message = ({ content,  className, from, msgRef, tabIndex }) =>  (
    <div tabIndex={tabIndex} ref={msgRef} className={className}>
        <span>{from === 'DT' ? 'Dealertrack Team' : 'Mr. Santos'} says:</span>
        <p>{content}</p>
    </div>
);

export default function MessageList({ messages }) {
    const classes = useStyles();
    //console.log(messages);
    return (
        <div className={classes.root}>
            <div className={classes.messages} id="messages">
                { messages.map((msg, index) => (
                    <Message 
                        className={msg.from === 'DT' ? classes.message : classes.messageRight}
                        key={msg.id} 
                        content={msg.content}
                        from={msg.from}
                        msgRef={msg.ref}
                        tabIndex={index}
                    />
                ))}
            </div>
        </div>
    );
};