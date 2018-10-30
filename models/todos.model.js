var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const schema=mongoose.Schema;

const ToDoSchema = new schema({
    title: String,
    description: String,
    date: Date,
    status: String
});

ToDoSchema.plugin(mongoosePaginate);
const ToDo = mongoose.model('Todo', ToDoSchema);

module.exports = ToDo;
