import { Note, SelectedNotesProp } from "../../types";

const SelectedNotes = ({ notes, setShowNotes }: SelectedNotesProp) => {
  const newArray: Note[] = [];

  const handleAll = () => {
    setShowNotes(notes);
  };

  const handleActive = () => {
    notes.map((n) => {
      !n.checked ? newArray.push(n) : n;
    });

    setShowNotes(newArray);
  };

  const handleCompleted = () => {
    notes.map((n) => {
      n.checked ? newArray.push(n) : n;
    });

    setShowNotes(newArray);
  };

  return (
    <>
      <button
        onClick={handleAll}
        className="px-3  text-gray-500 focus:text-indigo-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 dark:focus:text-indigo-500"
      >
        All
      </button>
      <button
        onClick={handleActive}
        className="px-3  text-gray-500 focus:text-indigo-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 dark:focus:text-indigo-500"
      >
        Active
      </button>
      <button
        onClick={handleCompleted}
        className="px-3  text-gray-500 focus:text-indigo-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 dark:focus:text-indigo-500"
      >
        Completed
      </button>
    </>
  );
};

export default SelectedNotes;
