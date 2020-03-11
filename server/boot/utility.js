module.exports = {
    makeAdmin(members, payload) {
        return new Promise((resolve,reject) => {
            members.getDataSource().connector.connect((err, db) => {
                console.log('inside the makeAdmin utility fn >>>>>>>>>>>>>>>');
                const collection = db.collection('members');
                const res = collection.find({email : payload.email},(err, res) => {
                    res.toArray((err, result) => {
                        console.log('result >>>>>>>>>>>',result,payload)
                        if (result[0].role.toLowerCase() != "superadmin") {
                            result = { status: "UnAuthorized",member : result };
                            return reject(result);
                        }
                        collection.findOneAndUpdate({ email : payload.email},{ $set: { role: payload.role } },(err, cb) => {
                            console.log('cb>>>>>>>>>>>>', cb);
                            this.updateRole(members,result,"admin")
                            return resolve(cb.value);
                        })
                        // collection.updateOne({ email }, { $set: { role: "fdfdfd" } }, (err, updateCb) => {
                        //     console.log('updateCb>>>>>>>>>>>', updateCb);
                        //     // updateCb.toArray()   
                        //     if (result.role.toLowerCase() == "admin") {
                        //         return result = {
                        //             status : "UnAuthorized"
                        //         }
                        //     }
                        //     // updateRole(members, result);
                        // })
                        // return resolve(result);
                    });
                });
            })
        })
    },

    updateRole(members,userData,value){
        members.create([userData], function(err, members) {
            if (err) return err;
            console.log('callback function invoked members>>>>>>>>>>>>..',members)
            //create the admin role
            Role.create({
              name: value
            }, function(err, role) {
                if (err) return err;
              console.log('role create callback fn>>>>>>>>>>>>..',role)
              //make bob an admin
              role.principals.create({
                principalType: RoleMapping.USER,
                principalId: members
              }, function(err, principal) {
                cb(err);
              });
            });
        });
    }
}