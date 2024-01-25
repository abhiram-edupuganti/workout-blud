
import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}
    
    const response = await fetch('http://localhost:3000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added:', json)
      
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm

//my form 

// import React, { useState } from 'react';
// import axios from 'axios';

// const WorkoutForm = () => {
//  const [formData, setFormData] = useState({ title: '', reps: '', load: '' });

//  const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//  };

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/api/workouts', formData);
//       alert('Workout data submitted successfully');
//     } catch (error) {
//       alert('Error submitting workout data');
//     }
//  };

//  return (
//     <form className='create' onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" name="title" onChange={handleChange} />
//       </label>
//       <label>
//         Reps:
//         <input type="number" name="reps" onChange={handleChange} />
//       </label>
//       <label>
//         Load:
//         <input type="number" name="load" onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//  );
// };

// export default WorkoutForm;
