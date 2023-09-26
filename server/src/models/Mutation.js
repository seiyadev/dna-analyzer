const { Schema, model } = require("mongoose");

const mutationSchema = new Schema({
  dna: {
    type: Array,
    required: true,
  },
  hasMutation: {
    type: Boolean,
    required: true,
  },
});

module.exports = model("Mutation", mutationSchema);
