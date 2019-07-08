export const simulationFactory = ({
    Vehicle = '',
    VehicleYear = '',
    VehiclePrice = 0,
    DownPayment = 0
} = {}) => ({
    Vehicle,
    VehicleYear,
    VehiclePrice,
    DownPayment,
    fromMessages(messages = []) {
        return Object.assign({}, {
            Vehicle: messages[1].content,
            VehicleYear: messages[3].content,
            VehiclePrice: messages[5].content,
            DownPayment: messages[7].content
        });
    }
});