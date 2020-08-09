const db = require('../models/user');

module.exports = {
    newWorkout: (req, res) => {
        db.WorkoutLog.create(req.body)
            .then((results) => res.send(results))
        results.save()
            .catch((err) => res.send(err));
    },

    getWorkout: async (req, res) => {
        db.WorkoutLog.find({})
            .then((allWorkouts) => res.send(allWorkouts))
            .catch((err) => res.send(err))
    },

    addWorkout: async (req, res) => {
        try {
            const workout = await db.WorkoutLog.findById(req.params.id);
            workout.excercises.push(req.body);

            workout.totalDuration += req.body.duration;

            await workout.save()
            res.send(workout)

        } catch (err) {
            res.send(err);
        }
    },
    getRange: async (req, res) => {
        try {
            const Range = await db.Workout.find({})
            res.send(Range)
        } catch (err) {
            res.send(err)
        }
    }

};