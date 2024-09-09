// @ts-nocheck
"use strict";

/**
 * scholarship controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const qs = require("qs");

// module.exports = createCoreController('api::scholarship.scholarship');

module.exports = createCoreController(
  "api::scholarship.scholarship",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      // const { populate } = ctx.query;
      const queryParams = qs.parse(ctx.query);

      // console.log(queryParams);

      // Default populate object for required fields
      let defaultPopulate = {
        cover_image: true,
        program: true,
        overview: {
          populate: {
            scholarship_type: true,
          },
        },
        multiple_section: true,
        key_date: {
            populate:{
                date:{
                    populate:{
                        icon:true,
                    }
                },
            }
        },
        application_process: true,
        supporting_documents: {
          populate: {
            documents: true,
          },
        },
        multiple_section2: true,

        faq: {
          populate: {
            faq_item: true,
          },
        },
     
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
      // Fetch the entity with the dynamically built populate object
      const entity = await strapi.db
        .query("api::scholarship.scholarship")
        .findOne({
          where: { slug: id },
          populate: populateObject,
        });

      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
