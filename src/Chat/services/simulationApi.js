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

const defaultHeaders = () => ({
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
})

export default  {
    postSimulation: (simulation) => axios.post(
        'https://sirimulation.herokuapp.com/simulation', 
        simulation,
        defaultHeaders()
    )
};