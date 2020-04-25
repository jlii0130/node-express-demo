const express = require("express");
const app = express();

var fs = require("fs");
var pftext = fs.readFileSync("./.well-known/acme-challenge/pfjV1A7h7Z-PfxFeD8QJ5mnSVoOySxitqyfs4ERQqPA");
var tstext = fs.readFileSync("./.well-known/acme-challenge/TsDhB-4GL6UBREEQkAgr7ajKL6CVMYoVQE0tF16v-w0")

app.get("/TsDhB-4GL6UBREEQkAgr7ajKL6CVMYoVQE0tF16v-w0", (req, res) => {
    res.send(tstext)
});

app.get("/pfjV1A7h7Z-PfxFeD8QJ5mnSVoOySxitqyfs4ERQqPA", (req, res) => {
    res.send(pftext)
});

module.exports = app;