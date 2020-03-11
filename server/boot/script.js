"use strict"
const utility = require('./utility');

module.exports = (app) => {
    const members = app.models.members;
    const Role = app.models.Role;
    const RoleMapping = app.models.RoleMapping;
    const Team = app.models.Team;

    const userData = {
        username: 'iamravisingh',
        firstName: "ravi",
        lastName : "singh",
        email: 'ravi@gmail.com',
        password: 'tatabyebye',
        role: "superadmin",
    }
  
  app.post('/makeAdmin', (req,res) => {
    console.log('dfdfd>>>>>>>>>>>>', req.body.email);
    const payload = {
      email: req.body.email,
      role : req.body.role
    }
    utility.makeAdmin(members, payload)
      .then(result => {
        console.log('data aftere makeAdmin api >>>>>>>>>>>>>>', result);
        return res.send(result)
      })
      .catch(err => {
        return res.send(err);
    })
  })
  
  // utility.makeAdmin(members, "ravi@gmail.com");
  utility.updateRole(members, userData , "superAdmin");
}
  
