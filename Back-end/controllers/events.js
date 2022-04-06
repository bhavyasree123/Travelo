// Event Controller

const Events = require('../models/events');

// Registration of an event
const registerEvent = async (req, res) => {
  const { eventName, dateAndTime, city, name, email, phone } = req.body;
  try {
    const event = new Events({
      eventName,
      dateAndTime,
      city,
      name,
      email,
      phone,
    });

    console.log(event);
    // Save the event
    const newEvent = await event.save();
    res.status(201).json({
      status: 'success',
      data: {
        event,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Get all events

const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json({
      status: 'success',
      results: events.length,
      data: {
        events,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = { getAllEvents, registerEvent };
