module.exports = (router) => {
  router.get("/checkout", (req, res) => {
    res.send('checkout')
  });
};
