
export const messageFactory = ({
    content = '',
    id = '',
    isVisible = false
} = {}) => ({
    content,
    id,
    isVisible
});

export const buildInitialState = () => ({
    messages: [
        {
            content: `Hi, I'm the dealertrack assistant, I'm here to help you with the simulation, can we start with the model of ther car you wanna buy ?`,
            id: 'vehicle_model',
            isVisible: true
        },
        {
            content: `What's the year of the vehicle ?`,
            id: 'vehicle_year',
            isVisible: false
        },
        {
            content: `What's the value of the entrance ?`,
            id: 'vehicle_down_payment',
            isVisible: false
        }
    ].map(messageFactory).reverse()
})