const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Make A Schema
const terpineSchema = new Schema({
  name: { type: String },
  nose: [{ type: String }],
  properties: [{ type: String }],
  strains: [{ type: String }],
  altsources: [{ type: String }]
})

// Make A Model From The Schema

const Terpine = mongoose.model('Terpine', terpineSchema)

// Export The Model For Use  In The App

module.exports = Terpine