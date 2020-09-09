const router = require('express').Router();
const workoutController = require('../controllers/workout-controllers');

router
    .route('/api/workouts')
    .get(workoutController.getWorkout)
    .post(workoutController.newWorkout)

router.put('/api/workouts/:id', workoutController.addWorkout)
router.get('/api.workouts/range', workoutController.getRange)


// const { newWorkout,
//     getWorkout,
//     addWorkout,
//     getRange,
// } = require('../controllers/workout-controllers');

// router.post('/api/workouts', newWorkout);

// router.get('/api/workouts', getWorkout);
// router.get('/api/workouts/range', getRange)

// router.put('/api/workouts/:id', addWorkout);



module.exports = router;