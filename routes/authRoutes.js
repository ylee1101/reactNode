const passport = require("passport");

module.exports = (app) => {
    app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
    );

    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user);

    });
    
    //req represent the incoming request and res represent outgoing response
    app.get('/api/current_userTesting', (req, res) => { 
        res.send(req.user);

    });
}

