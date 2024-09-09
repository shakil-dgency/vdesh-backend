// @ts-nocheck
"use strict";

/**
 * university controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const qs = require("qs");

// module.exports = createCoreController('api::university.university');

module.exports = createCoreController(
  "api::program.program",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      // const { populate } = ctx.query;
      const queryParams = qs.parse(ctx.query);

      // console.log(queryParams);
      

      // Default populate object for required fields
      let defaultPopulate = {
        cover_image: true,
        university:true,
        study_levels : true,
        level: {
            populate:{
                overview:true,
                multiple_section : true,
                tution_and_scholarship: true,
                application_deadline:{
                    populate:{
                        application_deadline_item : true
                    }
                },
                curriculum :{
                    populate:{
                        curriculum_item : true
                    }
                },
                multiple_section2 : true
            }
        },
        director_message:{
            populate:{
                image: true
            }
        },
        faculty_members:{
            populate:{
                members :{
                    populate:{
                        image: true
                    }
                }
            }
        },
        scholarship:true,     
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
        .query("api::program.program")
        .findOne({
          where: { slug: id },
          populate: populateObject,
        });

      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
