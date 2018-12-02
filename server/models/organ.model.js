const mongoose = require('mongoose');

const OrganSchema = new mongoose.Schema({
    donatorId: { type: String, required: true, default: 'Default string' },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Organ', OrganSchema);
