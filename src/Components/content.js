import React from "react";
import '../index.css'
import img from '../kettlebel.png'



export default function Content(){

    const [page, setPage] = React.useState(0);



    function addDaily(){
        setPage(() => {
            const number = 1;
           return(number)
        }) // Go to daily log
    }
    function goHome(){
        setPage(() => {
            const number = 0;
            return(number)
        }) // go to home
    }
    

    
    
    const CreateWorkout = () => {
        return(
                        <div>
                        <div className="flex">
                            <label for="workoutNumbers">Workout 01</label>
                            <input id="workoutNumber" type="text"/>
                        </div>

                        <div className="flex">
                            <label for="sets">Sets</label>
                            <input id="sets" type="number" min="1" max="6"/>
                            <label for="reps">Reps</label>
                            <input id="reps" type="number" min="6" max="20"/>
                            <label for="kg">KG</label>
                            <input id="kg" type="number" min="0" max="100"/>  
                        </div>
                        </div>
        )
    }

    const [workoutAmount, setWorkoutAmount] = React.useState(1)
    
    function incWorkoutCounter(){
        setWorkoutAmount((prevAmount) => {
            
            return (prevAmount === 5 ? prevAmount : prevAmount + 1)
  
        })
    }

    function decWorkoutCounter(){
        setWorkoutAmount((prevAmount) => {
            return (prevAmount === 0 ? prevAmount : prevAmount - 1)
        })
    }
    console.log(`amount: ${workoutAmount}`)

    const Log = () => {
        return(
            <div className="btn-container">
                <div className="form-container">
                <div className="flex">
                            <h3>{`Workouts: ${workoutAmount}`}</h3>
                            <button onClick={incWorkoutCounter}>+</button>
                            <button onClick={decWorkoutCounter}>-</button>
                </div>

                
                    <form>
                        <div className="flex">
                            <label for="muscleGroups">Muscle Group</label>
                            <input id="muscleGroups" list="muscleGroup"/>
                        </div>
                    </form>
                    <div>
                    
                    </div>

                    
                    <datalist id="muscleGroup"> 
                        <option>Biceps</option>
                        <option>Triceps</option>
                        <option>Back</option>
                        <option>Legs</option>
                        <option>Core</option>
                        <option>Chest</option>
                    </datalist>

                    <button onClick={goHome}>
                        Return Home
                    </button>
                </div>
            </div>
        )
    }
    
    const Home = () => {
        return(
        <div className="btn-container">
        <button className="button-home" onClick={addDaily}>
            <img src={img} width="26px"/>
            Add daily log
        </button>
        <button className="button-home">
            <img src={img} width="26px" />
            View History
        </button>
    </div>

        )

    }

    
    return(
        <div>
        {page === 0 ? <Home/> : <Log/>}
        </div>
    )
}