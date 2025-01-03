mongosh -u root -p root
use travelmemory
db.createUser({
    user: "travelmemory",
    pwd: "2009Namikaze",
    roles: [{ role: "readWrite", db: "travelmemory" }]
});
