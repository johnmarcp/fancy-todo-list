const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todosSchema);
