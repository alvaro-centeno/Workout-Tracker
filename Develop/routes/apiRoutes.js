const express = require("express");
const router = express.Router();

const { Workout } = require("../models");

router.get("/workouts", (req, res) => {
    Workout.find({}).sort({ day: 1 })
        .then((workouts) => {
            res.json(workouts);
        })
        .catch((err) => {
            console.error(err);
            res.status(404).end();
        });
});

router.get("/workouts/range", (req, res) => {
    const cutoffDate = new Date().setDate(new Date().getDate() - 7);
    Workout.find({ day: { $gte: cutoffDate } }).sort({ day: 1 })
        .then((workouts) => {
            res.json(workouts);
        })
        .catch((err) => {
            console.error(err);
            res.status(404).end();
        });
});


router.post("/workouts", (req, res) => {
    const { body } = req;
    Workout.create(body)
        .then((newWorkout) => {
            res.json(newWorkout);
        })
        .catch(err => {
            console.error(err);
            res.status(404).end()
        });
}); // add
router.put("/workouts/:id", (req, res) => {
    console.log(req.params.id, req.body);
    Workout.findOneAndUpdate({ _id: req.params.id },
        { $push: { exercises: req.body } }).then(
            (updatedWorkout) => {
                console.log(updatedWorkout);
                res.json(updatedWorkout);
            })
});

module.exports = router;
