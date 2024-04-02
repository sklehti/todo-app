import React from "react";
import { AllNotesWithStateHandling } from "../../types";
import SelectedNotes from "../selectedNotes/SelectedNotes";

const TodosInfo = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  const handleCompleted = () => {
    const newArray = notes.filter((n) => !n.checked);
    setShowNotes(newArray);
    setNotes(newArray);
  };

  return (
    <div className="relative flex justify-between  flex-row rounded-md w-full p-5 x-2 bg-white dark:bg-gray-700 font-semibold">
      <p className="px-3 text-gray-300 dark:text-gray-400">
        {notes.filter((n) => !n.checked).length} items left
      </p>

      <div className="mobile-layout hidden lg:block">
        <SelectedNotes
          notes={notes}
          setNotes={setNotes}
          showNotes={showNotes}
          setShowNotes={setShowNotes}
        />
      </div>
      <button
        className="px-3 text-gray-300 hover:text-gray-400 dark:text-gray-400"
        onClick={handleCompleted}
      >
        Clear completed
      </button>
    </div>
  );
};

export default TodosInfo;
