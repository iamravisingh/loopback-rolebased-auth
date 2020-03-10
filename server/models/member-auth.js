'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const app = require("../server");
const ds = app.dataSources.User;
console.log('loopback instance >>>>>>>>>>>>>>',app)

const models = ["User"]

module.exports = function (Memberauth) {
    // const memberAuth = app.models.member_auth;
    const User = app.models.User;
    const Role = app.models.Role;
    const RoleMapping = app.models.RoleMapping;
    const Team = app.models.Team;
    /*** change authorization role
     ** @param {Function(Error)} callback
    */
    Memberauth.prototype.makeAdmin = (data, callback) => {
      console.log('data in makeadmin function>>>>>>>>>>>>>', data,app);
      // TODO
      const result = {
        message : "successfully updated the role"
      }
      app.models.User.find({ email: result }, (result) => {
        console.log('user data from email id >>>>>>>>>>>>.', result);
      })
      callback(null,result);
    };

};
