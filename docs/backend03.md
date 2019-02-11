# Step 4 - Backend Part 3
> In this step, we are going to set up some important features namely authentication, checking to make sure we only have 1 user that can create an account in our app (these are OUR feeings after all)

## Generate Authentication
> Let's create authentication for our application using the feathers CLI 
Generating the authentication routes is as easy as:

```sh
feathers generate authentication
```

You'll be prompted to select some choices. I did the follwing:
```sh
? What authentication providers do you want to use? Other PassportJS strategies
not in this list can still be configured manually. (Press <space> to select, <a>
 to toggle all, <i> to invert selection)Username + Password (Local)
? What is the name of the user (entity) service? users
? What kind of service is it? Mongoose
```

You'll see in the `src/models` folder there is now a `users.model.js` file with the properties that the authentication will accept: email & password.

NOTE: That feathersjs is using `jwt` aka json web tokens and your password never gets stored anywhere.

## Add authentication to CRUD requests
> in this case we will say that authentication must occur for all instances

Navigate to your `src/services/feelings/feelings.hooks.js`. You'll bring in the authentication functionality by requiring the featherjs authetication hook and then adding it before all -- 'before.all[]' -- CRUD operations. What this means is that featherjs will ask whether or not the user is authenticated before every CREATE, READ, UPDATE, DELETE request going on. 

```js
const {authenticate} = require('@feathersjs/authentication').hooks;
module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  ...

}
```