const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    type: {
        type: String,
        required: 'must choose type!'
    },
    name: {
        type: String,
        required: 'must add name!'
    },
    duration: {
        type: Number,
        required: 'must add integer for duration!'
    },
    weight: {
        type: Number,
        require: 'must add integer for weght'
    },
    reps: {
        type: Number,
        require: 'must add integer for reps'
    },
    sets: {
        type: Number,
        require: 'must add integer for sets'

    },
    distance: {
        type: Number,
        require: 'must add integer for distance'

    },
});

const workoutLogSchema = new Schema({
    day: {
        type: Date,
        default: new Date(),
    },
    excercises: [excerciseSchema],
    totalDuration: {
        type: Number,
        default: 0,
    },
    excercises: [excerciseSchema]
});

const WorkoutLog = mongoose.model('Workout Log', workoutLogSchema);

module.exports = WorkoutLog; 