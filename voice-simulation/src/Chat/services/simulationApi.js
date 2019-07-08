
const mock = {
    status: 200
    data: {
        'Simulation': {

        }
    }
};

const errorMock = {};

export default  {
    postSimulation: (simulation) => new Promise(
        (resolve, reject) => setTimeout(() => {
            if (!simulation.PublicId) {
                reject(errorMock);
            }
            resolve(mock);
        }, 2000);
    );  
};