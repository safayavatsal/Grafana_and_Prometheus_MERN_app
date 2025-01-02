mongosh -u root -p root
use travelmemory
db.createUser({
    user: "travelmemory",
    pwd: "2104Chendur",
    roles: [{ role: "readWrite", db: "travelmemory" }]
});