const cards = require("./01-cards.json");
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE cards RESTART IDENTITY CASCADE")
    .then(() => knex("cards").insert(cards));
};
