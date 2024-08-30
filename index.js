import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const baseURL = "https://api.openuv.io/api/v1/uv";
const apiKey = "openuv-3pywdrm0gqiopi-io";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/uv", async (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;

  if (!lat || !lng) {
    return res.render("index.ejs", {
      uv: null,
      error: "Please provide both latitude and longitude.",
    });
  }

  try {
    const response = await axios.get(`${baseURL}`, {
      headers: {
        "x-access-token": apiKey,
      },
      params: {
        lat: lat,
        lng: lng,
      },
    });

    res.render("index.ejs", { uv: response.data, error: null });
  } catch (error) {
    console.error(error);
    res.render("index.ejs", {
      uv: null,
      error: "Error retrieving data from Open UV API.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
