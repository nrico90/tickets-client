import React from "react";

export default function EventForm(props) {
  console.log("what are the props", props);
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={props.onChange}
          value={props.values.name}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          name="description"
          onChange={props.onChange}
          value={props.values.description}
        />
      </label>

      <label>
        Picture:
        <input
          type="text"
          name="picture"
          onChange={props.onChange}
          value={props.values.picture}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
