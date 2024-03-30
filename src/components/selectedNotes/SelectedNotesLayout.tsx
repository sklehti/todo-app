import { AllNotesWithStateHandling } from "../../types";
import SelectedNotes from "./SelectedNotes";

const SelectedNotesLayout = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  return (
    <div className="relative flex justify-center  flex-row rounded-md w-full p-5 x-2 bg-white font-semibold lg:hidden">
      <SelectedNotes
        notes={notes}
        setNotes={setNotes}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
      />
    </div>
  );
};

export default SelectedNotesLayout;
