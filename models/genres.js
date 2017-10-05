/**
 * Created by madhan on 8/16/17.
 */
var mongoose = require('mongoose');

var genresSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});
var Genre = module.exports = mongoose.model('Genre',genresSchema);

//Get Genres
module.exports.getGenres = function (callback,limit) {
    Genre.find(callback).limit(limit);
}
//Add Gener

module.exports.addGenre = function (genre,callback) {
    Genre.create(genre,callback);
}
//Update genre
module.exports.updateGenre = function (id,genre,options,callback) {
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query,update,options,callback);
}
// Delete

module.exports.deleteGenre = function (id,genre,options,callback) {
    var query = {_id: id};
    Genre.remove(query,callback);
}
