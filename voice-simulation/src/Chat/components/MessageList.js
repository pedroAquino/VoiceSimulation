import React from 'react';

const Message = ({ content }) => (
    <div>
        <p>{content}</p>
    </div>
);

export default function MessageList({ messages }) {
    return (
        <div>
            { messages.map(msg => <Message key={msg.id} content={msg.content} /> ) }
        </div>
    );
};