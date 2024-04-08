import { AllNotesWithStateHandling } from "../../types";
import SelectedNotes from "./SelectedNotes";

const SelectedNotesLayout = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  return (
    <section className="relative flex justify-center  flex-row rounded-md w-full p-5 x-2 bg-white font-semibold lg:hidden dark:bg-gray-700">
      <SelectedNotes
        notes={notes}
        setNotes={setNotes}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
      />
    </section>
  );
};

export default SelectedNotesLayout;
