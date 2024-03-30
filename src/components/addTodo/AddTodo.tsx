import "./AddTodo.css";
import checkIcon from "../../assets/images/icon-check.svg";
import { useState } from "react";
import { AllNotesWithStateHandling } from "../../types";

const AddTodo = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  const [newNote, setNewNote] = useState<string>("");

  const handleNote = () => {
    if (newNote.length > 0) {
      setNotes(
        notes.concat({
          note: newNote,
          checked: false,
        })
      );

      setShowNotes(
        notes.concat({
          note: newNote,
          checked: false,
        })
      );
    }

    setNewNote("");
  };

  return (
    <div className="relative flex justify-center flex-col">
      <input
        type="text"
        className="w-full p-5 x-2 pl-16 rounded-md todo-input"
        placeholder="Create a new todo..."
        value={newNote}
        onChange={({ target }) => setNewNote(target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.key === "Enter" ? handleNote() : "";
        }}
      />
      <div className="absolute text-xl select-none pl-5 flex justify-center flex-col">
        <div className="absolute h-5 w-5 rounded-full border">
          <img src={checkIcon} alt="checkmark icon" />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
