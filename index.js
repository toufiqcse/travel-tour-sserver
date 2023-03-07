const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// add midleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("travel tour site is running");
});

// destination data
const destination = require("./data/popularDestinations.json");
app.get("/destination", (req, res) => {
  res.send(destination);
});

// all tours data
const tours = require("./data/tours.json");
app.get("/tours", (req, res) => {
  res.send(tours);
});

// get id wise data from tours

app.get("/tours/:id", (req, res) => {
  const id = req.params.id;
  const tour = tours.find((newTour) => newTour.id === id) || {};
  res.send(tour);
});

// get data by destination id wise
app.get("/destination/:id", (req, res) => {
  const id = req.params.id;

  const destination_tours =
    tours.filter((desTour) => desTour.destination_id === id) || {};
  res.send(destination_tours);
});

// get tour details
const toursDetails = require("./data/toursDetails.json");
app.get("/tours_details", (req, res) => {
  res.send(toursDetails);
});

// get tour details by id

app.get("/tour-details/:id", (req, res) => {
  const _id = req.params.id;

  const detailstr = tours.find((tr) => tr.id === _id) || {};
  res.send(detailstr);
});

app.listen(port, () => {
  console.log(`Travel tour running on port ${port} `);
});
