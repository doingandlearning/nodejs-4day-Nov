function auth(req, res, next) {
  if (req.headers["x-api-key"] === "secure_key") {
    next();
  }
  console.error("Unauthorized request");
  res.status(400).send({ success: false, message: "Need x-api-key" });
}

module.exports = {
  auth,
};
