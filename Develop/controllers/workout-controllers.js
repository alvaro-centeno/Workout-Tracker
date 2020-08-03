const Workout = require('../models/user');

module.exports = {
    newWorkout: async (req, res) => {
        Workout.create(req.body)
            .then((results) => res.send(results))
            .catch((err) => res.send(err));
    },

    getWorkout: async (req, res) => {
        !req.query.id
            ? Workout.find({})
                .then((allWorkouts) => res.send(allWorkouts))
                .catch((err) => res.send(err));
    },

    addWorkout: async (req, res) => {
        try {
            const workout = await Workout.findById(req.params.id);
            workout.addWorkout.push(req.body);

            let setDuration = 0;
            await workout.workoutSet.forEach((workoutSet) => {
                setDuration += workoutSet.duration
            });

            workout.setDuration = setDuration;
            await workout.save();
            res.send(workout);
        } catch (err) {
            res.send(err);
        }
    },

};