'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const qs = require("qs");

module.exports = createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      // const { populate } = ctx.query;
      // @ts-ignore
      const queryParams = qs.parse(ctx.query);

      // console.log(queryParams);
      

      // Default populate object for required fields
      let defaultPopulate = {
        image: true,
        
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
        .query("api::blog.blog")
        .findOne({
          where: { slug: id },
          populate: populateObject,
        });

      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);

// module.exports = createCoreController('api::blog.blog');
