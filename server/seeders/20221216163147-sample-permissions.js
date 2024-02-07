'use strict';

const moment = require("moment");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Permissions", [
      {
        id: "role.get",
        name: "Role -> Get",
        description: "Get a role detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "role.list",
        name: "Role -> List",
        description: "List all the roles.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "role.create",
        name: "Role -> Create",
        description: "Create a new role.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "role.update",
        name: "Role -> Update",
        description: "Update role details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "role.delete",
        name: "Role -> Delete",
        description: "Delete an existing role.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "user.get",
        name: "Role -> Get",
        description: "Get a user detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "user.list",
        name: "User -> List",
        description: "List all the users.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "user.create",
        name: "User -> Create",
        description: "Create a new user.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "user.update",
        name: "User -> Update",
        description: "Update user details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "user.delete",
        name: "User -> Delete",
        description: "Delete an existing user.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "permission.get",
        name: "Permission -> Get",
        description: "Get a permission detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "permission.list",
        name: "Permission -> List",
        description: "List all the permissions.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "permission.create",
        name: "Permission -> Create",
        description: "Create a new permission.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "permission.update",
        name: "Permission -> Update",
        description: "Update permission details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "permission.delete",
        name: "Permission -> Delete",
        description: "Delete an existing permission.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agency.get",
        name: "Agency -> Get",
        description: "Get a agency detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agency.list",
        name: "Agency -> List",
        description: "List all the agencies.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agency.create",
        name: "Agency -> Create",
        description: "Create a new agency.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agency.update",
        name: "Agency -> Update",
        description: "Update agency details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agency.delete",
        name: "Agency -> Delete",
        description: "Delete an existing agency.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agencyMember.get",
        name: "AgencyMember -> Get",
        description: "Get a agency member detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agencyMember.list",
        name: "AgencyMember -> List",
        description: "List all the agency members.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agencyMember.create",
        name: "Member -> Create",
        description: "Create a new agency member.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agencyMember.update",
        name: "AgencyMember -> Update",
        description: "Update agency member details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "agencyMember.delete",
        name: "AgencyMember -> Delete",
        description: "Delete an existing agency member.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "client.get",
        name: "Client -> Get",
        description: "Get a client detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "client.list",
        name: "Client -> List",
        description: "List all the clients.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "client.create",
        name: "Client -> Create",
        description: "Create a new client.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "client.update",
        name: "Client -> Update",
        description: "Update client details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "client.delete",
        name: "Client -> Delete",
        description: "Delete an existing client.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "advertisement.get",
        name: "Advertisement -> Get",
        description: "Get a advertisement detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "advertisement.list",
        name: "Advertisement -> List",
        description: "List all the advertisements.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "advertisement.create",
        name: "Advertisement -> Create",
        description: "Create a new advertisement.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "advertisement.update",
        name: "Advertisement -> Update",
        description: "Update advertisement details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "advertisement.delete",
        name: "Advertisement -> Delete",
        description: "Delete an existing advertisement.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "display.get",
        name: "Display -> Get",
        description: "Get a display detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "display.list",
        name: "Display -> List",
        description: "List all the displays.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "display.create",
        name: "Display -> Create",
        description: "Create a new display.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "display.update",
        name: "Display -> Update",
        description: "Update display details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "display.delete",
        name: "Display -> Delete",
        description: "Delete an existing display.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "campaign.get",
        name: "Campaign -> Get",
        description: "Get a campaign detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "campaign.list",
        name: "Campaign -> List",
        description: "List all the campaigns.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "campaign.create",
        name: "Campaign -> Create",
        description: "Create a new campaign.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "campaign.update",
        name: "Campaign -> Update",
        description: "Update campaign details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "campaign.delete",
        name: "Campaign -> Delete",
        description: "Delete an existing campaign.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "timeslot.get",
        name: "Timeslot -> Get",
        description: "Get a timeslot detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "timeslot.list",
        name: "Timeslot -> List",
        description: "List all the timeslots.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "timeslot.create",
        name: "Timeslot -> Create",
        description: "Create a new timeslot.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "timeslot.update",
        name: "Timeslot-> Update",
        description: "Update timeslot details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "timeslot.delete",
        name: "Timeslot -> Delete",
        description: "Delete an existing timeslot.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "device.get",
        name: "Device -> Get",
        description: "Get a device detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "device.list",
        name: "Device -> List",
        description: "List all the devices.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "device.create",
        name: "Device -> Create",
        description: "Create a new device.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "device.update",
        name: "Device-> Update",
        description: "Update device details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "device.delete",
        name: "Device -> Delete",
        description: "Delete an existing device.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "stream.get",
        name: "Stream -> Get",
        description: "Get a stream detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "stream.list",
        name: "Stream -> List",
        description: "List all the streams.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "stream.create",
        name: "Stream -> Create",
        description: "Create a new stream.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "stream.update",
        name: "Stream-> Update",
        description: "Update stream details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "stream.delete",
        name: "Stream -> Delete",
        description: "Delete an existing stream.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "streamZone.get",
        name: "StreamZone -> Get",
        description: "Get a streamZone detail.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "streamZone.list",
        name: "StreamZone -> List",
        description: "List all the streamZones.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "streamZone.create",
        name: "StreamZone -> Create",
        description: "Create a new streamZone.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "streamZone.update",
        name: "StreamZone-> Update",
        description: "Update streamZone details.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "streamZone.delete",
        name: "StreamZone -> Delete",
        description: "Delete an existing streamZone.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        id: "overview.list",
        name: "Overview -> List",
        description: "Creating an overview.",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
