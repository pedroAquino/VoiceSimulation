export const messageFactory = ({
    content = ''
} = {}) => ({
    content,
    id: Date.now()
});


export const chatStateFactory = ({
    messages = [],
    loadingMessages = false,
    errorMessages = []
} = {}) => ({
    messages,
    loadingMessages,
    errorMessages
});
