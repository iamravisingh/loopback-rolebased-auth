'use strict';

const app = require('loopback')
console.log('loopback instance >>>>>>>>>>>>>>',app)

module.exports = function (Memberauth) {
        
    Memberauth.remoteMethod(
        'login', {
          http: {
            path: '/login',
            verb: 'post'
          },
          returns: {
            arg: 'login',
            type: 'string'
          }
        }
    );
    
    
};
