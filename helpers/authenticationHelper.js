import jwt from "jsonwebtoken";

/**Generate a JsonWebToken
 * This function will be use in the
 * useCotrollers Login endPoint
 * to create a token, after the password comparision
 * with bcrypt is fullfilled.
 *
 * The created token will be passed in the response
 * as part of the cookie sent.
 */

const generateToken = (user) => {
  const payload = { sub: user._id }; // subject = user

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: "15min" },
      (err, token) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      }
    );
  });
};

export default generateToken;
