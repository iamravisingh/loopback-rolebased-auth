"use strict"

const app = require("../server/server");
const ds = app.dataSources.mongodbDs;
const models = [
    "User",
    "member_auth",
    "Role",
    "AccessToken",
    "ACL",
    "RoleMapping",
]
ds.autoupdate(models, err => {
    if (err) throw err;
    console.log('autoUpdate triggered models created!!!!');
    ds.disconnect();
    process.exit();
})