import React from "react";

export default function Workout(props){

        return(

                        <div className="div-sep">
                            <div className="line"></div>
                            <div className="flex">
                                <label htmlFor="workoutNumbers">{`Workout ${props.id}`}</label>
                                <input 
                                    id="workoutNumber" 
                                    type="text"  
                                    onChange={props.handleWorkout} 
                                    value={props.workoutNumber}
                                />
                            </div>

                        <div className="flex">
                            <label htmlFor="sets">Sets</label>
                            <input 
                                id="sets" 
                                type="number" 
                                min="1" 
                                max="6"
                                onChange={props.handleWorkout}
                                value={props.sets}
                            />
                            <label htmlFor="reps">Reps</label>
                            <input 
                                id="reps" 
                                type="number" 
                                min="6" 
                                max="20"
                                onChange={props.handleWorkout}
                                value={props.reps}    
                            />
                            <label htmlFor="kg">KG</label>
                            <input 
                                id="kg" 
                                type="number" 
                                min="0" 
                                max="100"
                                onChange={props.handleWorkout}
                                value={props.kg}    
                            />  
                        </div>
                        </div>
        )
    
}