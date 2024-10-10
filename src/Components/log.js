import React, { useState } from "react";
import Names from "./Names";
import Workout from "./workout";

export default function Log(props) {
  const initialInputs = [];
  for (let i = 0; i < props.workoutCounter; i++) {
    initialInputs.push({
      id: i,
      name: "",
    });
  }

  const [data, setData] = useState(initialInputs);

  function handleChange(id, value) {
    const newData = [...data];
    newData[id] = {
      id: id,
      name: value,
    };

    setData(() => {
      return newData;
    });
  }

  const spawnNames = [];
  for (let i = 0; i < props.workoutCounter; i++) {
    spawnNames.push(<Names onChange={handleChange} id={i} />);
  }

  const initialWorkoutData = [];

  for (let i = 0; i < props.workoutCounter; i++) {
    initialWorkoutData.push({
      workoutID: { i },
      workoutType: "",
      workoutSets: "",
      workoutReps: "",
      workoutKg: "",
    });
  }

  const [workoutData, setWorkoutData] = useState(initialWorkoutData);

  function handleWorkoutChange(
    id,
    componentWorkout,
    componentSets,
    componentReps,
    componentkg
  ) {
    const newWorkoutData = { ...workoutData };
    newWorkoutData[id] = {
      workoutID: { id },
      workoutType: { componentWorkout },
      workoutSets: { componentSets },
      workoutReps: { componentReps },
      workoutKg: { componentkg },
    };

    setWorkoutData(newWorkoutData);
  }

  const spawnWorkouts = [];
  for (let i = 0; i < props.workoutCounter; i++) {
    spawnWorkouts.push(<Workout id={i} onChangeInputs={handleWorkoutChange} />);
  }

  return (
    <div className="btn-container">
      <div className="form-container">
        <div className="flex">
          <h3>{`Workouts: ${props.workoutCounter}`}</h3>
          <button onClick={props.incWorkoutCounter}>+</button>
          <button onClick={props.decWorkoutCounter}>-</button>
          {spawnNames}
        </div>

        <div>
          <p>Workouts</p>
          {spawnWorkouts}
        </div>
        <button onClick={props.goHome}> Home</button>

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
  );
}
