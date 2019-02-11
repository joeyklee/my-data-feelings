# Deploy

Now it's time to deploy your app. There's a few things to take care of before we do though.


## Push your repo to github
> Heroku can build your project from a github repo. There are other ways to deploy your app, but this is how I will do it in this tutorial.

==> we can go over this in class. otherwise, see: https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/


## Go to Heroku

1. New: 'create new app'
2. give it a name! note: the name you give will turn into your heroku URL: e.g. my-data-feelings.herokuapp.com
3. create app
4. deployment method: "github"
5. "connect to github": my-data-feelings


## Add a "resource" mLab add-on
1. resources tab
2. add-ons
3. mLab
4. sandbox plan
5. app to provision to: my-data-feelings


now go to mLab via the url attached to the add-on

1. collections tab
2. add collection: 'feelings'
3. add collection: 'users'

## Edit your production.json AND your feathersClient.js

### edit your production.json

```json
{
  "host": "https://<your-project-name>.herokuapp.com",
  "port": "PORT",
  "mongodb": "MONGODB_URI"
}

```

### edit your feathersClient.js

Using the host name of your app: e.g. `https://<your-project-name>.herokuapp.com` 


## 🏝🚀 Deploy!

1. go to heroku
2. deploy tab
3. scroll down to "manual deploy"
4. select the branch you want to deploy
5. deploy branch
6. view app!