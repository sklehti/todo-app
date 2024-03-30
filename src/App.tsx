import bgLightImg from "./assets/images/bg-mobile-light.jpg";
import bgDarkImg from "./assets/images/bg-desktop-dark.jpg";
import Navbar from "./components/navbar/Navbar";
import "./styles.css";
import AddTodo from "./components/addTodo/AddTodo";
import AllTodos from "./components/allTodos/AllTodos";
import { useState } from "react";
import { Note } from "./types";
import ReorderList from "./components/reorderList/ReorderList";
import SelectedNotesLayout from "./components/selectedNotes/SelectedNotesLayout";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showNotes, setShowNotes] = useState<Note[]>([]);
  // const [status, setStatus] = useState<Status>(Status.All);

  return (
    <div className="font-josefin m-0 p-0 w-screen h-screen box-border bg-gray-100  dark:bg-gray-900 dark:text-white text-dark-grayish-blue">
      <img
        src={bgLightImg}
        alt="background light mode image"
        className="w-full h-1/3 dark:hidden"
      />

      <img
        src={bgDarkImg}
        alt="background dark mode image"
        className="w-full h-1/3 hidden dark:block"
      />
      <div className="fixed top-0 min-w-full min-h-full flex justify-center flex-row">
        <div className="w-4/5 max-w-2xl">
          <Navbar />
          <AddTodo
            notes={notes}
            setNotes={setNotes}
            showNotes={showNotes}
            setShowNotes={setShowNotes}
          />
          <AllTodos
            notes={notes}
            setNotes={setNotes}
            showNotes={showNotes}
            setShowNotes={setShowNotes}
          />
          <SelectedNotesLayout
            notes={notes}
            setNotes={setNotes}
            showNotes={showNotes}
            setShowNotes={setShowNotes}
          />
          <ReorderList />
        </div>
      </div>
    </div>
  );
}

export default App;
