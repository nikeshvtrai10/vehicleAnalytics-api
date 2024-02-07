const { AgencyMember } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a AgencyMember
 * It will update a AgencyMember.
 * @param queryObj
 * @returns {Promise<AgencyMember>}
 */
module.exports = async (queryObj) => {
  const agencyMember = await AgencyMember.findOne({
    where: {
      agencyId: queryObj.agencyId,
      id: queryObj.agencyMemberId,
      body: queryObj.body,
      active: true,
    },
  });

  if (!agencyMember) {
    throw new ValidationError("Unable to find the agencyMember.", 404);
  }

  const duplicateAgencyMember = await AgencyMember.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: agencyMember.dataValues.id,
      },
    },
  });

  if (duplicateAgencyMember) throw new ValidationError("Duplicate AgencyMember Name", 403);

  agencyMember.name = queryObj.name;
  await agencyMember.save();

  return agencyMember;
};
