module.exports = (router) => {
  router.post("/login", (request, response) => {
    console.log(request.body);
    response.send('login')
  });
};
