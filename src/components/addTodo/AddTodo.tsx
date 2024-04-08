import "./AddTodo.css";
import { useState } from "react";
import { AllNotesWithStateHandling } from "../../types";
import { parseNumber, toNewNote } from "../../utils";

const AddTodo = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  const [newNote, setNewNote] = useState<string>("");

  console.log(showNotes);

  const handleNote = () => {
    try {
      if (toNewNote({ note: newNote, checked: false })) {
        setNotes(
          notes.concat({
            id: parseNumber(notes.length),
            note: newNote,
            checked: false,
          })
        );

        setShowNotes(
          notes.concat({
            id: parseNumber(notes.length),
            note: newNote,
            checked: false,
          })
        );
      }

      setNewNote("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <section className="relative flex justify-center flex-col">
      <input
        autoFocus
        type="text"
        className="p-5 pl-16 rounded-md todo-input dark:bg-gray-700  outline-gray-700  focus:outline focus:outline-2 focus:outline-offset-1 focus:input-layout"
        placeholder="Create a new todo..."
        value={newNote}
        onChange={({ target }) => setNewNote(target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.key === "Enter" ? handleNote() : "";
        }}
      />
      <div className="absolute text-xl select-none pl-5 flex justify-center flex-col">
        <div className="absolute h-5 w-5 rounded-full border">
          {/* <img src={checkIcon} alt="checkmark icon" /> */}
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
