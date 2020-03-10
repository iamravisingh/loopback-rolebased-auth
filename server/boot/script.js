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
  
  console.log('members before Adding the data>>>>>>>>>>', members());
  return
    members.create([userData], function(err, members) {
        if (err) return err;
        console.log('callback function invoked members>>>>>>>>>>>>..',members)
        //create the admin role
        Role.create({
          name: 'admin'
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