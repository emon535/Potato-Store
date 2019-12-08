import { last, find, findIndex } from 'lodash';
import products from './products';

export default function initProducts(mock) {
  mock.onGet(/\/api\/products\/\d+/).reply(function(config) {
    const id = last(config.url.split('/'));
    const product = find(products, (product) => (product.id.toString() === id.toString()));
    console.log(`Got \`GET /api/products/${id}\` request with data:` , config.data);
    console.log('Will respond with data: ', product);

    return [200, product];
  });
  
  mock.onGet('/api/products').reply(function(config) {
    console.log('Got `GET /api/products` request with data:', config.data);
    console.log('Will respond with data: ', products);

    return [200, products];
  });

  mock.onPut(/\/api\/products\/\d+/).reply(function(config) {
    const id = last(config.url.split('/'));
    const productId = getProductIndex(products, id);
    products[productId] = JSON.parse(config.data);

    console.log(`Got \`PUT /api/products/${id}\` request with data:` , config.data);
    console.log('Will respond with data: ', products[productId]);

    return [200, products[productId]];
  });
  
  mock.onDelete(/\/api\/products\/\d+/).reply(function(config) {
    const id = last(config.url.split('/'));
    const productId = getProductIndex(products, id);
    
    if (productId >= 0) {
      products.splice(productId, 1);
    }

    console.log(`Got \`DELETE /api/products/${id}\` request with data:` , config.data);
    console.log('Will respond with data: ', products);

    return [200, products];
  });


  mock.onPost('/api/products').reply(function(config) {
    const newProduct = JSON.parse(config.data);
    const nextId = products.reduce(function(acc, value){
      return Math.max(acc, value.id)
    }, 0) + 1;

    newProduct.id = nextId;
    products.push(newProduct);

    console.log('Got `POST /api/products` request with data:' , config.data);
    console.log('Will respond with data: ', products);

    return [200, products];
  });
}

function getProductIndex(products, id) {
  return findIndex(products, (product) => (product.id.toString() === id.toString()));
}