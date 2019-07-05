import React from 'react';

const Message = ({ content, isVisible }) => isVisible ? (
    <div>
        <p>{content}</p>
    </div>
) : null;

export default function MessageList({ messages }) {
    return (
        <div>
            { messages.map(msg => <Message key={msg.id} content={msg.content} isVisible={msg.isVisible} /> ) }
        </div>
    );
};