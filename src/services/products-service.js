import ApiFactory from '../mock';
import Editor from '../Editor';
import { take } from 'lodash';
import products from '../mock/products';

// export  function getIsAdmin() {
//     ApiFactory.getInstance().get('/api/is-admin')
//       .then(({ data }) => {
//         setValue(beautify(data));
//       })
//       .catch((error) => {
//         console.log(error.response);
//       }).catch((error) => {
//         // TODO: Display nice error message.
//         console.log(error.response);
//       });
//   }

// export  function getAllProducts() {
//     ApiFactory.getInstance().get('/api/products')
//       .then(({ data }) => {
//         setValue(beautify({ products: take(data, 3) }));
//       })
//       .catch((error) => {
//         console.log(error.response);
//       }).catch((error) => {
//         // TODO: Display nice error message.
//         console.log(error.response);
//       });
//   }


export function getAllProducts() {
    const items  = [
        {
          "id": 1,
          "name": "Yukon Gold",
          "description": "Yukon Gold potatoes have finely flaked yellowish-white skin with light yellow flesh. They're bright, vegetal and slightly sweet, with a smooth, slightly waxy texture and moist flesh. They're best for boiling, baking and making French fries. They'll also stand up well to grilling, pan frying and roasting.",
          "price": 2.75,
          "images": [
            {
              "id": 2,
              "name": "image 2",
              "new": false
            },
            {
              "id": 3,
              "name": "image 1",
              "new": false
            }
          ],
          "new": false
        },
        {
          "id": 2,
          "name": "Idaho Russet",
          "description": "Idaho Russet potatoes are russet-skinned with white flesh. They're what we typically imagine when we think of potatoes. They have a neutral potato flavor, a fluffy, creamy and soft texture, and are best for baking, mashing and making French fries. They're also very absorbent, so are great paired with butter and cream -- think mashed potatoes. Just don't try using Idaho Russets for potato salads, gratins or any dish that requires the potatoes to hold their shape.",
          "price": 3.75,
          "images": [
            {
              "id": 6,
              "name": "image 4",
              "new": false
            },
            {
              "id": 5,
              "name": "image 3",
              "new": false
            }
          ],
          "new": false
        },
        {
          "id": 7,
          "name": "Purple Peruvian",
          "description": "Purple Peruvian potatoes have deep purple skin and flesh. The flesh is either uniform throughout or marbled with white and deep, inky purple. They're earthy and slightly nutty, with an almost buttery aftertaste. They have a dry and starchy texture and are best for boiling, baking, roasting, frying and grilling, although they should work in all dishes and preparations.",
          "price": 4.75,
          "images": [
            {
              "id": 8,
              "name": "image 5",
              "new": false
            }
          ],
          "new": false
        }
      ];
      return items;

  }

//   function getProduct(id) {
//     ApiFactory.getInstance().get(`/api/products/${id}`)
//       .then(({ data }) => {
//         setValue(beautify({ products: data }));
//       })
//       .catch((error) => {
//         console.log(error.response);
//       }).catch((error) => {
//         // TODO: Display nice error message.
//         console.log(error.response);
//       });
//   }

//   function deleteProduct(id) {
//     ApiFactory.getInstance().delete(`/api/products/${id}`).then(
//       () => { getAllProducts() }
//     ).catch((error) => {
//       // TODO: Display nice error message.
//       console.log(error.response);
//     });
//   }

//   function updateProduct(id, data) {
//     ApiFactory.getInstance().put(`/api/products/${id}`, data).then(
//       () => { getAllProducts() }
//     ).catch((error) => {
//       // TODO: Display nice error message.
//       console.log(error.response);
//     });
//   }

//   function buyItems(items) {
//     ApiFactory.getInstance().post('/api/buy', { itemsToBuy: items }).then(function() {
//       alert('Bought Items. This is fake API that do nothing.');
//     }).catch((error) => {
//       // TODO: Display nice error message.
//       console.log(error.response);
//     });
//   }

  function beautify(val) {
    return JSON.stringify(val, null, 2);
  }