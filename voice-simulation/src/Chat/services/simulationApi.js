
const mock = {
    status: 200,
    data: {
        'Simulation': {
            Terms: 48,
            TermsPrice: 620,
        }
    }
};

//const errorMock = {};

export default  {
    postSimulation: (simulation) => new Promise(
        (resolve, reject) => setTimeout(() => {
            resolve(mock);
        }, 2000)
    )  
};