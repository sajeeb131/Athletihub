const express = require("express");
const { createTournament, getTournament, getTournamentDetails} = require('../controllers/tournament-controller');

const Router = express.Router();

Router.post('/create', createTournament);
Router.get('/', getTournament);
Router.get('/:id', getTournamentDetails);

module.exports = Router;