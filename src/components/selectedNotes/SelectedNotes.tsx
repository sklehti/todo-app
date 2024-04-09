import { useState } from "react";
import { Note, SelectedNotesProp } from "../../types";

const SelectedNotes = ({ notes, setShowNotes }: SelectedNotesProp) => {
  const newArray: Note[] = [];
  const [buttonFocus, setButtonFocus] = useState(1);

  const handleAll = () => {
    setShowNotes(notes);
    setButtonFocus(1);
  };

  const handleActive = () => {
    notes.map((n) => {
      !n.checked ? newArray.push(n) : n;
    });

    setShowNotes(newArray);
    setButtonFocus(2);
  };

  const handleCompleted = () => {
    notes.map((n) => {
      n.checked ? newArray.push(n) : n;
    });

    setShowNotes(newArray);
    setButtonFocus(3);
  };

  return (
    <>
      <button
        tabIndex={0}
        onClick={handleAll}
        className="px-3  text-gray-500 focus:text-indigo-500  hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 dark:focus:text-indigo-500"
        style={buttonFocus === 1 ? { color: "hsl(220, 98%, 61%)" } : {}}
      >
        All
      </button>
      <button
        tabIndex={0}
        onClick={handleActive}
        className="px-3  text-gray-500  hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 dark:focus:text-indigo-500"
        style={buttonFocus === 2 ? { color: "hsl(220, 98%, 61%)" } : {}}
      >
        Active
      </button>
      <button
        tabIndex={0}
        onClick={handleCompleted}
        className="px-3  text-gray-500 focus:text-indigo-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 dark:focus:text-indigo-500"
        style={buttonFocus === 3 ? { color: "hsl(220, 98%, 61%)" } : {}}
      >
        Completed
      </button>
    </>
  );
};

export default SelectedNotes;
