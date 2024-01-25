import React from 'react'
//data fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {

  const handleClick = async () =>{
    const response = await fetch('http://localhost:3000/api/workouts/'+workout._id,{
      method : 'DELETE'
    })
    const json = await response.json();
    if(response.ok)
    {
      console.log("delete successful");
    }
  }

  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load(kgs) : </strong>{workout.load}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix : true})}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails