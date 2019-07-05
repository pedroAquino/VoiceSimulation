
export const messageFactory = ({
    content = '',
    id = '',
    isActive = false
} = {}) => ({
    content,
    id,
    isActive
});

export const buildInitialState = () => ({
    messages: [
        {
            content: `Hi, I'm the dealertrack assistant, I'm here to help you with the simulation, can we start with the model of ther car you wanna buy ?`,
            id: 'vehicle_model',
            isActive: true
        },
        {
            content: `What's the year of the vehicle ?`,
            id: 'vehicle_year',
            isActive: false
        },
        {
            content: `What's the value of the entrance ?`,
            id: 'vehicle_down_payment',
            isActive: false
        }
    ].map(messageFactory).reverse()
})