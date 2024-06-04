import React from "react"

export default function Log(props){



    return(
        <div className="btn-container">
            <div className="form-container">
            <div className="flex">
                <h3>{`Workouts: ${props.workoutCounter}`}</h3>
                <button onClick={props.incWorkoutCounter}>+</button>
                <button onClick={props.decWorkoutCounter}>-</button>
            </div>

                <form>
                        <label htmlFor="muscleGroups">Muscle Group</label>
                        <input id="muscleGroups" list="muscleGroup"/>
                        {props.workouts}
                        <button 
                            type="submit" 
                            className="button-home"
                            onClick={props.recordLogs}
                            ><img 
                                src={props.img} 
                                width="29.5px" 
                                alt="record log"/>Record Log</button> 
                    
                </form>
                
                

                
                <datalist id="muscleGroup"> 
                    <option>Biceps</option>
                    <option>Triceps</option>
                    <option>Back</option>
                    <option>Legs</option>
                    <option>Core</option>
                    <option>Chest</option>
                </datalist>

                
            </div>
        </div>
    )
}