export const simulationFactory = ({
    Vehicle = '',
    VehicleYear = '',
    VehiclePrice = 0,
    DownPayment = 0
} = {}) => ({
    Vehicle,
    VehicleYear,
    VehiclePrice,
    DownPayment
});