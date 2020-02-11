import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [focused, setFocused] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleFocus() {
    setFocused(true);
  }

  return (
    <div>
      <form className="create-note">
        {focused ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={focused ? "3" : "1"}
          onFocus={handleFocus}
        />
        <Zoom in={focused ? "true" : ""}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
