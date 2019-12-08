import axios from 'axios';

import initProducts from './initProducts';
import initIsAdmin from './initIsAdmin';
import initBuyItems from './initBuyItems';

const MockAdapter = require('axios-mock-adapter');

const ApiFactory = (function(){
  function ApiWithMocks() {
    const axiosInstance = axios.create();
    const mock = new MockAdapter(axiosInstance, { delayResponse: 100 });

    initIsAdmin(mock);
    initProducts(mock);
    initBuyItems(mock);

    return axiosInstance;
  }
  
  let instance;

  return {
      getInstance: function(){
          if (instance === undefined) {
              instance = new ApiWithMocks();
              // Hide the constructor so the returned object can't be new'd...
              instance.constructor = null;
          }
          return instance;
      }
    };
})();

export default ApiFactory;