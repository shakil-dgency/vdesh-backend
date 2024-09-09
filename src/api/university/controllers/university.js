// @ts-nocheck
"use strict";

/**
 * university controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const qs = require("qs");

// module.exports = createCoreController('api::university.university');

module.exports = createCoreController(
  "api::university.university",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      // const { populate } = ctx.query;
      const queryParams = qs.parse(ctx.query);

      // console.log(queryParams);
      

      // Default populate object for required fields
      let defaultPopulate = {
        cover_image: true,
        logo: true,
        about_image: true,
        admission_requirement: {
          populate: {
            requirements: true,
          },
        },
        multiple_section: true,
        outcomes: {
          populate: {
            images: true,
            career_title: true,
          },
        },
        statistic:{
          populate:{
            demographics : true
          }
        },
        alumni:{
          populate:{
            alumni_person_list :true
          }
        },
        gallery:{
          populate:{
            images: true
          }
        },
        testimonial:{
          populate:{
            testimonial_data : {
              populate:{
                image: true
              }
            }
          }
        },
        faq:{
          populate:{
            faq_item : true
          }
        },
        programs: true

        
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
        .query("api::university.university")
        .findOne({
          where: { slug: id },
          populate: populateObject,
        });

      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
