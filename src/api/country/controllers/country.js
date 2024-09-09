// @ts-nocheck
"use strict";

/**
 * country controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const qs = require("qs");

// module.exports = createCoreController('api::country.country');

module.exports = createCoreController("api::country.country", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const queryParams = qs.parse(ctx.query);

    // Default populate object for required fields
    let defaultPopulate = {
      cover_image: true,
      passport_image: true,
      about_country: {
        populate: {
          flag: true,
        },
      },
      universities: {
        populate: true,
      },
      scholarship:true,
      multiple_section: {
        populate: true,
      },
      faq: {
        populate: true,
      },
      country_scholarship: true,
    };

       // Parse the populate query parameter if it exists
       let populateObject;
       if (queryParams.populate) {
         populateObject = queryParams.populate;
       } else {
         populateObject = defaultPopulate;
       }

    // sanitizeQuery to remove any query params that are invalid or the user does not have access to
    // It is strongly recommended to use sanitizeQuery even if validateQuery is used
    const entity = await strapi.db.query("api::country.country").findOne({
      where: { slug: id },
      populate: populateObject,
    });
    
    const sanitizedResults = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedResults);
  },
}));
