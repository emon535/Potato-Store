## This is a final task boilerplate for Adapt Academy final assessment.

You can see example of application at [https://adaptdk.github.io/Adapt-Academy-Frontend-2019-solution](https://adaptdk.github.io/Adapt-Academy-Frontend-2019-solution)

You can see how to use mocked API at [https://adaptdk.github.io/Adapt-Academy-Frontend-2019-task](https://adaptdk.github.io/Adapt-Academy-Frontend-2019-task)

Try to create a similiar application as in example provide above.

It should contains such pages:
- landing page;
- product page;
- purchase page;
- administration page, that will be visible for admin users;
- product editing page;

It use **axios-mock-adapter** for simulating and handling basic CRUD:

-  **GET /api/is-admin** will return:

  ```{isAdmin: true}```

- **GET /api/products** will return all existing products:

  ```javascript
  [
      {
        "id": 1,
        "name": "Yukon Gold",
        "description": "Yukon Gold potatoes have finely flaked yellowish-white skin with light yellow flesh. They're bright, vegetal and slightly sweet, with a smooth, slightly waxy texture and moist flesh. They're best for boiling, baking and making French fries. They'll also stand up well to grilling, pan frying and roasting.",
        "price": 2.75,
        "images": [{
            "id": 2,
            "name": "image 2",
            "url": "",
            "new": false
        }],
        "new": false
      }, {
        "id": 2,
        "name": "Idaho Russet",
        "description": "Idaho Russet potatoes are russet-skinned with white flesh. They're what we typically imagine when we think of potatoes. They have a neutral potato flavor, a fluffy, creamy and soft texture, and are best for baking, mashing and making French fries. They're also very absorbent, so are great paired with butter and cream -- think mashed potatoes. Just don't try using Idaho Russets for potato salads, gratins or any dish that requires the potatoes to hold their shape.",
        "price": 3.75,
        "images": [{
            "id": 6,
            "name": "image 4",
            "url": "",
            "new": false
        }, {
            "id": 5,
            "name": "image 3",
            "url": "",
            "new": false
        }],
        "new": false
        }, {
          "id": 7,
          "name": "Purple Peruvian",
          "description": "Purple Peruvian potatoes have deep purple skin and flesh. The flesh is either uniform throughout or marbled with white and deep, inky purple. They're earthy and slightly nutty, with an almost buttery aftertaste. They have a dry and starchy texture and are best for boiling, baking, roasting, frying and grilling, although they should work in all dishes and preparations.",
          "price": 4.75,
          "images": [{
              "id": 8,
              "name": "image 5",
              "url": "",
              "new": false
          }
        ],
        "new": false
    },
    ...
  ]
  ```

- **GET /api/products/{id}** will return concrete product:

  ```javascript
  {
        "id": 1,
        "name": "Yukon Gold",
        "description": "Yukon Gold potatoes have finely flaked yellowish-white skin with light yellow flesh. They're bright, vegetal and slightly sweet, with a smooth, slightly waxy texture and moist flesh. They're best for boiling, baking and making French fries. They'll also stand up well to grilling, pan frying and roasting.",
        "price": 2.75,
        "images": [{
            "id": 2,
            "name": "image 2",
            "url": "",
            "new": false
        }],
        "new": false
      }
  ```

- **PUT /api/products/{id}** will update existing product and will return it:

  ```javascript
  {
        "id": 1,
        "name": "Yukon Gold",
        "description": "Yukon Gold potatoes have finely flaked yellowish-white skin with light yellow flesh. They're bright, vegetal and slightly sweet, with a smooth, slightly waxy texture and moist flesh. They're best for boiling, baking and making French fries. They'll also stand up well to grilling, pan frying and roasting.",
        "price": 2.75,
        "images": [{
            "id": 2,
            "name": "image 2",
            "url": "",
            "new": false
        }],
        "new": false
      }
  ```

- **POST /api/products** will create new product and will return all products. 
- **DELETE /api/products/{id}** will delete product and will return all products.
- **POST /api/buy/{id}** do nothing, but useful for implementing notification message when items was bought by user.

Request calls to api should be done by using ApiFactory.getInstance() that includes all api CRUD mocks. It will let for axios-mock-adapter to inject mocks and simulate basic CRUD:

```javascript
import ApiFactory from './mock';

ApiFactory.getInstance().get('/api/is-admin').then(({ data }) => {
    setIsAdmin(data.isAdmin);
}).catch((error) => {
    // TODO: Display nice error message.
    console.log(error.response);
});
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Will install all dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


