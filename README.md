## SET UP

Check your current version of npm and node
Inside of package.json
Add 
"engines": {
    "node": "8.10.0",
    "npm": "5.6.0"
},

FIRST TIME DEPLOY

1. create heroku account

2. commit out codebase to git
    git init
    git add .
    git commit -m "initial commit"
3. install heroku CLI and create app
    heroku login
    heroku create
    it will give you 2 links 
4. deploy app with git
    git remote add heroku "2nd link ending with .git"
    git push heroku master
5. heroku deploys project
    heroku open to open in web browser

FIXING OR ADDING THEN DEPLOYING

1. git status (to check what has changed)
2. git add .
3. git commit -m "your message"
4. git push heroku master
