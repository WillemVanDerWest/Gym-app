import React from "react";
import "../index.css";
import img from "../kettlebel.png";
import Workout from "./workout.js";
import Home from "./home.js";
import Log from "./log.js";

export default function Content() {
  const [page, setPage] = React.useState(1); //Current page counter

  function addDaily() {
    setPage(() => {
      const number = 1;
      return number;
    }); // Go to daily log
  }
  function goHome() {
    setPage(() => {
      const number = 0;
      return number;
    }); // go to home
  }
  function goLog() {
    setPage(2);
  }

  const [workoutCounter, setWorkoutCounter] = React.useState(1);
  function incWorkoutCounter() {
    setWorkoutCounter((prevAmount) => {
      return prevAmount === 5 ? prevAmount : prevAmount + 1;
    });
  } // increasing workouts

  function decWorkoutCounter() {
    setWorkoutCounter((prevAmount) => {
      return prevAmount === 0 ? prevAmount : prevAmount - 1;
    });
  } // decreasing workouts

  function recordLogs() {
    goHome();
    setWorkoutCounter(1);
  } //record logs when button is pressed

  // const ShowLogData = () => {
  //     return(
  //         <div>
  //             <ul>
  //                 <li>Workout: </li>
  //                 <li>Sets: </li>
  //                 <li>Reps: </li>
  //                 <li>KG: </li>
  //             </ul>
  //             <button onClick={goHome}>go home</button>
  //         </div>
  //     )
  // }

  return (
    <div>
      {page === 0 ? ( //if
        <Home addDaily={addDaily} img={img} goLog={goLog} />
      ) : page === 1 ? ( //else
        <Log
          incWorkoutCounter={incWorkoutCounter}
          decWorkoutCounter={decWorkoutCounter}
          recordLogs={recordLogs}
          workoutCounter={workoutCounter}
          img={img}
          goHome={goHome}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}
