import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 'calc(100vh - 108px)',
        overflowY: 'scroll',
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

const Message = ({ content,  className }) =>  (
    <div className={className}>
        <p>{content}</p>
    </div>
);

export default function MessageList({ messages }) {
    const classes = useStyles();
    return (
        <div className={classes.root} id="messages">
            { messages.map(msg => (
                <Message 
                    className={msg.from === 'DT' ? classes.message : classes.messageRight}
                    key={msg.id} 
                    content={msg.content} 
                />
            ))}
        </div>
    );
};