import React from "react";
import { AllNotesWithStateHandling } from "../../types";
import SelectedNotes from "../selectedNotes/SelectedNotes";

const TodosInfo = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  return (
    <div className="relative flex justify-between  flex-row rounded-md w-full p-5 x-2 bg-white font-semibold">
      <p className="px-3 text-gray-300">{notes.length} items left</p>

      <div className="mobile-layout hidden lg:block">
        <SelectedNotes
          notes={notes}
          setNotes={setNotes}
          showNotes={showNotes}
          setShowNotes={setShowNotes}
        />
      </div>
      <button className="px-3 text-gray-300">Clear completed</button>
    </div>
  );
};

export default TodosInfo
