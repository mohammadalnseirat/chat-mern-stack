import jwt from "jsonwebtoken";
const genderateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });
  // ?set cookies:
  res.cookie("access_token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //! prevent XSS attacks cross-site scripting attacks
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //! CSRF attacks cross-site request forgery attacks
  });
};

export default genderateTokenAndSetCookie;
