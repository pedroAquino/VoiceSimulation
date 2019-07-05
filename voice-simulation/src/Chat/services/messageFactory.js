
export const messageFactory = ({
    content = '',
    id = '',
    isVisible = false,
    from = 'DT'
} = {}) => ({
    content,
    id,
    isVisible,
    from
});

export const buildInitialState = () => ({
    messages: [
        {
            content: `Hi, I'm the dealertrack assistant, I'm here to help you with the simulation, can we start with the model of ther car you wanna buy ?`,
            id: 'vehicle_model',
            isVisible: true,
            from: 'DT'
        }
    ].map(messageFactory)
})


// {
//     content: `What's the year of the vehicle ?`,
//     id: 'vehicle_year',
//     isVisible: false
// },
// {
//     content: `What's the value of the entrance ?`,
//     id: 'vehicle_down_payment',
//     isVisible: false
// }