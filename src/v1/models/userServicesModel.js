/**
 * User services record for tracking services added
 * by the user or assigned by a caregiver
 * 
 * @author Ben Philip
 */

'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

/**
 * Service schema for connecting users to their
 * linked services
 */
const userServicesSchema = new Schema({
    userId: { type: String, required: true },
    services: [{
        serviceId: { type: String, required: true },
        assignedBy: { type: String, required: true }
    }]
});

// Compile schema
const userServicesModel = Mongoose.model('USERSERVICE', userServicesSchema, 'userservices');

module.exports = userServicesModel;