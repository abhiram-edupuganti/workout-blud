import React from 'react'
import { useState,useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import useWorkoutsContext from '../hooks/useWorkoutsContext';


const Home = () => {

    const [workouts,setWorkOuts]=useState(null);
    // const {workouts,dispatch}=useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/workouts');
                // const responseText = await response.text();
                // console.log(responseText);
                if (response.ok) {
                    const json = await response.json(); 
                    setWorkOuts(json)
                    // dispatch({type: 'SET_WORKOUTS',payload:json})
                } else {
                    console.error('Failed to fetch workouts:', response.status);
                }
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };
    
        fetchWorkouts();
    }, []);
    

    return (
        <div className='home'>
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home