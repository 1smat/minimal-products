import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // @ts-ignore
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get("/products", (req, res) => {
  const subdomain = req.query.sub
  const products = [
    {
      _id: "0",
      title: "Iphone X",
      desc: "White 64gb",
      message: `Some logic with ${subdomain} subdomain on server`

    },
    {
      _id: "1",
      title: "Iphone 11",
      desc: "Black 128gb",
      message: `Some logic with ${subdomain} subdomain on server`


    },
    {
      _id: "2",
      title: "Iphone 12",
      desc: "Midnight 256gb",
      message: `Some logic with ${subdomain} subdomain on server`

    }
  ]
  res.send(products)
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
