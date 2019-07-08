import { buildInitialState as messagesFactory } from './messageFactory';

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
  ...messagesFactory()
});
