import React from 'react';

export const messageFactory = ({
    content = '',
    id = '',
    from = 'DT'
} = {}) => ({
    content,
    id,
    from,
    ref: React.createRef()
});

export const getNextMessage = (chatState) => {
    const currentMessageIndex = chatState.predefinedMessages
        .map(msg => msg.id)
        .indexOf(chatState.currentMessage.id);
    return chatState.predefinedMessages[currentMessageIndex + 1];
};

export const buildInitialState = () => ({
    predefinedMessages: [
        {
            content: `What's the year of the vehicle ?`,
            id: 'vehicle_year',
            from: 'DT'
        },
        {
            content: `What's the vehicle price ?`,
            id: 'vehicle_price',
            from: 'DT'
        },
        {
            content: `What's the value of the down payment ?`,
            id: 'vehicle_down_payment',
            from: 'DT'
        },
        {
            content: 'We are doing the simulation...',
            id: 'vehicle_doing_simulation',
            from: 'DT'
        }
    ].map(messageFactory),
    messages: [
        {
            content: `What's the model of the vehicle ?`,
            id: 'vehicle_model',
            from: 'DT'
        }
    ].map(messageFactory),
    currentMessage: messageFactory({
        id: 'vehicle_model',
        from: 'DT'
    })
});