"use strict"
module.exports = function (app) {
    
const memberAuth = app.models.member_auth;
const User = app.models.user
const Role = app.models.Role;
const RoleMapping = app.models.RoleMapping;
const Team = app.models.Team;

    app.post('/login', function(req, res) {
        memberAuth.login({
          email: req.body.email,
          password: req.body.password
        }, 'member_auth', function (err, token) {
            console.log('custom login route called d>>>>>>>>>>>>>>',arguments)
          if (err) {
            res.render('response', { //render view named 'response.ejs'
              title: 'Login failed',
              content: err,
              redirectTo: '/',
              redirectToLinkText: 'Try again'
            });
            return;
          }
      
          res.render('home', { //login user and render 'home' view
            email: req.body.email,
            accessToken: token.id
          });
        });
      });
}