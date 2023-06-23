const User = require('../models/user-model');

const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await User.findOne({ _id: id });
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.status(200).json({ profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProfile };
