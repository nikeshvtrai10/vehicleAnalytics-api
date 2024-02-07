const {
  Agency,
  AgencyMember,
  sequelize
} = require("../../../../models");

const {
  ValidationError
} = require("../../../../errors");

/**
 * Create a Agency
 * It will create a new Agency
 * @param queryObj
 * @returns {Promise<Agency>}
 */

module.exports = async (queryObj) => {
  const duplicateName = await Agency.findOne({
    where: {
      name: queryObj.name,
      active: true
    },
  });

  if (duplicateName) {
    throw new ValidationError("Duplicate Name", 403);
  }
  const duplicatePhone = await Agency.findOne({
    where: {
      phone: queryObj.phone,
      active: true
    },
  });

  if (duplicatePhone) {
    throw new ValidationError("Duplicate Phone Number", 403);
  }

  const duplicateEmail = await AgencyMember.findOne({
    where: {
      email: queryObj.email,
      active: true
    },
  });

  if (duplicateEmail) {
    throw new ValidationError("Duplicate Email", 403);
  }

  // Starting Transaction
  const tr = await sequelize.transaction({
    autocommit: true
  })

  const agency = await Agency.create(queryObj, {
    transaction: tr
  });

  if (!agency) {
    await tr.rollback();
    throw new ValidationError("Unable to create a new agency", 500);
  }

  const agencyMember = await AgencyMember.create({
    roleId: "agency",
    primary: true,
    agencyId: agency.dataValues.id,
    ...queryObj
  }, {
    transaction: tr
  });

  if (!agencyMember) {
    await tr.rollback();
    throw new ValidationError("Unable to create a new agency member", 500);
  }

  await tr.commit();

  const {
    password,
    ...restAgencyMember
  } = agencyMember.dataValues;
  return {
    agency,
    agencyMember: restAgencyMember
  };
};