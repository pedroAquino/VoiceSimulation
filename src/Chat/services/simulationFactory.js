import { API_BODY_TEMPLATE } from './simulationApi';

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
        return Object.assign({}, this, {
            Vehicle: messages[1].content,
            VehicleYear: messages[3].content,
            VehiclePrice: messages[5].content,
            DownPayment: messages[7].content
        });
    },
    toApi() {
        return Object.assign({}, API_BODY_TEMPLATE, {
            data: {
                ...API_BODY_TEMPLATE.data,
                FinancingTerms: {
                    DownPayment: this.DownPayment,
                    Term: 42,
                    SpecialSale: 'DISABLED'
                },
                Vehicle: {
                    ModelYear: this.VehicleYear,
                    ManufactureYear: this.VehicleYear,
                    Trim: this.Vehicle,
                    SellingPrice: this.VehiclePrice,
                }
            }
        });
    }
});

export const simulationResponseFactory = ({
    Terms = 0,
    TermsPrice = 0,
} = {}) => ({
    Terms,
    TermsPrice,
    toString() {
        return `This is the result of the simulation with Itau Bank: ${this.Terms}x of R$ ${this.TermsPrice}`;
    },
    fromApiResponse(apiResponse) {
        return Object.assign({}, this, {
           Terms: apiResponse.PaymentOptions.Term,
           TermsPrice: apiResponse.PaymentOptions.VehicleInstallmentValue
        });
    }
});