const customExpress = require("./config/customExpress");
const connection = require("./infrastructure/connection");

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected with success");
    const app = customExpress();
    app.listen(3000, () => console.log("Server running on port 3000"));
  }
});
