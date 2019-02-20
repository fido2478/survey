module.exports = (req, res, next) => {
  if (!req.user) {
    // 401: Unauthorized
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};
