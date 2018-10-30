var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const schema=mongoose.Schema;

const ToDoSchema = new schema({
    title: {type: String,default: "null is not zero ~JSON"},
    description: String,
    date: Date,
    status: String
});

ToDoSchema.plugin(mongoosePaginate);
const ToDo = mongoose.model('Todo', ToDoSchema);

module.exports = ToDo;
