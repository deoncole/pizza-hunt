//  import the dependencies
const { get } = require('express/lib/response');
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// schema for the data
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal)=> dateFormat(createdAtVal)
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            // reference the id to the model to connect the two
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of comment and replies on retrieval by using a virtual
PizzaSchema.virtual('commentCount').get(function(){
    return this.comments.length;
})

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;