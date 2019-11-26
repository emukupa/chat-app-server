export default app => {
  app.get("/", (req, res) => {
    res.json({hello: "World"});
  });
};