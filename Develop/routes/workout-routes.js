const router = require('express').Router();
const { newWorkout,
    getWorkout,
    addWorkout,
    getRange,
} = require('../controllers/workout-controllers');

router.post('/api/workouts', newWorkout);

router.get('/api/workouts', getWorkout);
router.get('/api/workouts/range', getRange)

router.put('/api/workouts/:id', addWorkout);



module.exports = router;