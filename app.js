const koa = require('koa');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();
const wineData = require('./src/data/wine.json');

// 1 step, mongoose
const mongoUrl = '127.0.0.1:27017/test';

app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect(mongoUrl);

const Schema = mongoose.Schema;
console.log(wineData);
const attributes = wineData.components;

const schemaSpec = {};

attributes.forEach((a) => {
	console.log(a);
	schemaSpec[a] = { type: Number, required: true };
});

const TastingSchema = new mongoose.Schema(schemaSpec,
{ timestamps: { createdAt: 'created_at' } });

restify.serve(router, mongoose.model('Tasting', schemaSpec));

app.use(router);

app.listen(3000, () => {
	console.log('Express server listening on port 3000');
});
