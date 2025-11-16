const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Please enter the name"],
    },
    address: {
      type: String,
      required: [true, "Please add the address"],
    },
    latitude: {
      type: Number,
      required: [true, "Please add the latitude"],
    },
    longitude: {
      type: Number,
      required: [true, "Please add the longitude"],
    },
    totalLots: {
      type: Number,
      required: [true, "Please add the total lots"],
    },
    price: {
      type: Number,
      required: [true, "Please add price"],
    },
    secretKey: {
      type: String,
      required: [true, "Please add the Secret Key"],
    },
    features: {
      type: [String],
      required: [true, "Please add features"],
      default: [],
    },
    image: {
      type: String,
      required: [true, "Please upload an image"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", taskSchema);
