const router = require('express').Router();
const { newWorkout,
    getWorkout,
    addWorkout
} = require('../controllers/workout-controllers');

router.post('/api/workouts', newWorkout);

router.get('/api/workouts', getWorkout);

router.put('/api/workouts', addWorkout);

module.exports = router;