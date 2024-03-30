import { AllNotesWithStateHandling, Note } from "../../types";

const SelectedNotes = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
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
        className="px-3  text-gray-300 focus:text-indigo-500"
      >
        All
      </button>
      <button
        onClick={handleActive}
        className="px-3  text-gray-300 focus:text-indigo-500"
      >
        Active
      </button>
      <button
        onClick={handleCompleted}
        className="px-3  text-gray-300 focus:text-indigo-500"
      >
        Completed
      </button>
    </>
  );
};

export default SelectedNotes;
