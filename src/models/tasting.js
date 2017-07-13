const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wineData = require('../data/wine.json');

const attributes = wineData.attributes;

const schemaSpec = {};

attributes.forEach((a) => {
	schemaSpec[a] = { type: Number, required: true };
});

const TastingSchema = new mongoose.Schema(schemaSpec,
{ timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Tasting', TastingSchema);
