const Location = require('../models/locations');

const addLocation = (req, res) => {
  const { userId, name } = req.body;
  Location.create(userId, name, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId });
  });
};

const getUserLocations = (req, res) => {
  const userId = req.user.id;
  Location.findByUserId(userId, (err, locations) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(locations);
  });
};

const deleteLocation = (req, res) => {
  const { id } = req.params;
  Location.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(204).send();
  });
};

module.exports = { addLocation, getUserLocations, deleteLocation };
