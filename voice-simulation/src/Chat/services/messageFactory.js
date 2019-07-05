
export const messageFactory = ({
    content = '',
    id = '',
    from = 'DT'
} = {}) => ({
    content,
    id,
    from
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
            content: `What's the value of the entrance ?`,
            id: 'vehicle_down_payment',
            from: 'DT'
        },
        {
            content: 'We are doing the simulation...',
            id: 'vehicle_doing_simulation',
            from: 'DT'
        }
    ],
    messages: [
        {
            content: `Hi, I'm the dealertrack assistant, I'm here to help you with the simulation, can we start with the model of ther car you wanna buy ?`,
            id: 'vehicle_model',
            from: 'DT'
        }
    ].map(messageFactory),
    currentMessage:  {
        id: 'vehicle_model',
        from: 'DT'
    }
});