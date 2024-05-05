
const jwt= require("jsonwebtoken")
const authmid = async (req, res ,next) => {
    const token = req.header('Authorizatuon');

    try {
        if (!token) {
            return res.status(401).send("token is not there")
       }
const verified=   jwt.verify(token,"ayuhwebdev")
if (!verified) {
     return res.status(401).send(" user is not valid")
}
console.log(verified);
req.user=verified;
next()
    } catch (error) {
console.log(error)
return res.status(500);
    }
}
module.exports=authmid;