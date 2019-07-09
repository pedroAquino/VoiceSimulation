import axios from 'axios';

export const API_BODY_TEMPLATE = {
   "jsonapi":{
      "version":"1.0"
   },
   "meta":{
      "LenderCode":"bankb",
      "TransactionId":"KpSz_NBS10Zi2e9SoXGntiFd",
      "TransactionType":"EstimatePayment"
   },
   "data": {
      "Customer":{

      },
      "Dealership":{

      }
   }
};

//const URL = 'http://localhost:5000';
const URL = 'http://sirimulation.herokuapp.com';
const defaultHeaders = () => ({
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
})

export default  {
    postSimulation: (simulation) => axios.post(
        `${URL}/simulation`,
        simulation,
        defaultHeaders()
    )
};