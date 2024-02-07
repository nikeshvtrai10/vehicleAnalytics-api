'use strict';
const moment = require("moment");

const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(8);

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Avanish",
        lastName: "Shrestha",
        email: "avanissh@gmail.com",
        password: bcrypt.hashSync("12345678", salt),
        phone: "9818254567",
        address: "Balkhu",
        active: true,
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        firstName: "Aashna",
        lastName: "Shrestha",
        email: "aashnashrestha@gmail.com",
        password: bcrypt.hashSync("12345678", salt),
        phone: "9861785174",
        address: "Patan",
        active: true,
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        firstName: "Nikesh",
        lastName: "Bhattarai",
        email: "nikeshvtrai10@gmail.com",
        password: bcrypt.hashSync("12345678", salt),
        phone: "9849514144",
        address: "Dillibazar",
        active: true,
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

