import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from 'helmet'
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

// this.app.use(hpp());
// this.app.use(helmet());
// this.app.use(compression());

app.use(bodyParser.json());
// Add headers before the routes are defined


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
