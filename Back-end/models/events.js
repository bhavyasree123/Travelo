const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    dateAndTime: { type: Date, required: true },
    city: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
