const koa = require('koa');
const mongoose = require('mongoose');
const KoaRestMongoose = require('koa-rest-mongoose');
const wineData = require('./src/data/wine.json');

// 1 step, mongoose
const mongoUrl = '127.0.0.1:27017/koa_rest_mongoose';

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

mongoose.connect(mongoUrl);
mongoose.model('Tasting', TastingSchema);

// 2 step, koa and router
const app = koa();
const rest = KoaRestMongoose({
  prefix: '/api'
});
app.use(rest.routes());

// 3 step, done
//http://localhost:5000/api/tasting/1
app.listen(process.env.PORT || 5000);
