import { SelectedNotesProp } from "../../types";
import SelectedNotes from "./SelectedNotes";

const SelectedNotesLayout = ({ notes, setShowNotes }: SelectedNotesProp) => {
  return (
    <section className="relative flex justify-center  flex-row rounded-md w-full p-5 x-2 bg-white font-semibold lg:hidden dark:bg-gray-700">
      <SelectedNotes notes={notes} setShowNotes={setShowNotes} />
    </section>
  );
};

export default SelectedNotesLayout;
