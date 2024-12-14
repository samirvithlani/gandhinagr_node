const jwt = require("jsonwebtoken");
const secret = "abc"; //16

//jwt auth2 part --> Bearer starts..

const verifyUser = (req, res, next) => {
  var token = req.headers.authorization;
  console.log(token)
  if (token) {
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; //Bearer tokenn,,,,,,,,,
      try {
        jwt.verify(token, secret);
        next();
      } catch (err) {
        //console.log(err);

        res.status(421).json({
          message: "user is not valid.",
        });
      }
    } else {
      res.status(421).json({
        message: "only bearer token accept.",
      });
    }
  } else {
    res.status(421).json({
      message: "token required *",
    });
  }
};
module.exports = verifyUser;
