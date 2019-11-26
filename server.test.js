//const esmImport = require('esm')(module);

//const dotenv = esmImport('dotenv');
// load the environmental variables
require("dotenv").config(); 

test("The port is 8000", () => {
  const port = parseInt(process.env.PORT);
  expect(port).toEqual(8000);
  expect(true).toEqual(true);
});
