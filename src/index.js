const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require("./routes/routes")
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));


app.use("/",routes)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
