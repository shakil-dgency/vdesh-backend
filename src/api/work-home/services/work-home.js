'use strict';

/**
 * work-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-home.work-home');
