const express=require('express');
const router=express.Router();
const Workout=require('../models/workoutModels');
const {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//get all workouts
router.get('/', getAllWorkouts)

//get single workouts
router.get('/:id',getWorkout)

//post one workout
router.post('/',createWorkout)

//delete one workout
router.delete('/:id',deleteWorkout)

//update a workout
router.patch('/:id',updateWorkout)

module.exports=router;