import React, { useState } from "react";
export default function Names(props) {
  //First Name Component
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    props.onChange(event.target.id, event.target.value);
  }
  return (
    <div>
      <input
        key={props.id}
        id={props.id}
        type="text"
        name="firstName"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
