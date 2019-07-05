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

export const buildInitialState = () => ({
  ...chatStateFactory(),
  messages: [
      messageFactory({ content: 
        ` Hi, I'm the dealertrack assistant, I'm here to help you with the simulation, can we start with the model of ther car you wanna buy ?` 
      })
  ]  
});
