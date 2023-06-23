const Sports = require('../models/home-model');
const PlayersTracker = require('../models/event-tracker-model')
const mongoose = require('mongoose')

const getEvents = async (req, res) => {
  try {
    const events = await Sports.find({}).sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such Events' });
    }

    const event = await Sports.findById(id);

    if (!event) {
      return res.status(404).json({ error: 'No such event' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const submitEvent = async (req, res) => {
  const { username, location, players, time, date } = req.body;

  let emptyFields = [];

  if (!username) {
    emptyFields.push('title');
  }
  if (!location) {
    emptyFields.push('load');
  }
  if (!players) {
    emptyFields.push('reps');
  }
  if (!time) {
    emptyFields.push('reps');
  }
  if (!date) {
    emptyFields.push('reps');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  // add doc to db
  try {
    const event = await Sports.create({ username, location, players, time, date });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEventPlayers = async (req, res) => {
  const { id } = req.params;
  const { players, username, eventId } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such Event' });
    }

    // Track the users joining the event
    try {
      const existingUser = await PlayersTracker.findOne({ username, eventId: id });

      if (existingUser) {
        // User already signed into this event
        return res.status(409).json({ error: 'User already signed into this event' });
      } else {
        // Create a new collection
        const track = await PlayersTracker.create({ username, eventId: id });
        console.log('New collection created:', track);
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    const event = await Sports.findByIdAndUpdate(
      id,
      { players },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ error: 'No such event' });
    }

    return res.status(200).json(event);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


module.exports = { getEvents, getEvent, submitEvent, updateEventPlayers };
