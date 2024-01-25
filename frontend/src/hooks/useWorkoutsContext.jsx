import { workoutContext } from '../context/workoutContext'
import { useContext } from 'react'

const useWorkoutsContext = () => {
    const context=useContext(workoutContext);
    if(!context)
    {
        throw Error('useWorkoutsContext must be inside an WorkoutContextProvider')
    }
    return context;
}

export default useWorkoutsContext