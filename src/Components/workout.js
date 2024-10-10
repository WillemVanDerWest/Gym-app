import React, { useState } from "react";

export default function Workout(props) {
  const classData = {
    id: props.id,
    workout: "",
    sets: "",
    reps: "",
    kg: "",
  };

  const [formData, setFormData] = useState(classData);

  function handleChange(event) {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);

    props.onChangeInputs(
      formData.id,
      formData.workout,
      formData.sets,
      formData.reps,
      formData.kg
    );
  }

  return (
    <div key={props.id}>
      <label>{`Workout 0${props.id + 1}`}</label>
      <input
        type="text"
        name="workout"
        placeholder="|--|"
        value={formData.workout}
        onChange={handleChange}
      />

      <label>{`Sets`}</label>
      <input
        type="number"
        name="sets"
        placeholder="3"
        min={`1`}
        max={`6`}
        value={formData.sets}
        onChange={handleChange}
      />
      <label>{`Reps`}</label>
      <input
        type="number"
        name="reps"
        placeholder="10"
        min={`0`}
        max={`30`}
        value={formData.reps}
        onChange={handleChange}
      />
      <label>{`KG`}</label>
      <input
        type="number"
        name="kg"
        placeholder="0"
        min={`0`}
        max={`200`}
        value={formData.kg}
        onChange={handleChange}
      />
    </div>
  );
}
