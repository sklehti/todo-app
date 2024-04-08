import { useEffect, useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import AllTodos from "../allTodos/AllTodos";
import Header from "../header/Header";
import ReorderList from "../reorderList/ReorderList";
import SelectedNotesLayout from "../selectedNotes/SelectedNotesLayout";
import { Note } from "../../types";
import "./MainPage.css";

import bgMobileLightImg from "../../assets/images/bg-mobile-light.jpg";
import bgDesktopLightImg from "../../assets/images/bg-desktop-light.jpg";
import bgMobileDarkImg from "../../assets/images/bg-mobile-dark.jpg";
import bgDesktopDarkImg from "../../assets/images/bg-desktop-dark.jpg";

const MainPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showNotes, setShowNotes] = useState<Note[]>([]);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);

  return (
    <div className="font-josefin m-0 p-0 w-screen h-screen box-border bg-gray-100  dark:bg-gray-900 dark:text-white text-dark-grayish-blue">
      {/* mobile view */}
      <img
        src={bgMobileLightImg}
        alt=""
        className="w-full h-1/3 dark:hidden md:hidden bg-img"
      />

      <img
        src={bgMobileDarkImg}
        alt=""
        className="w-full h-1/3 hidden dark:block md:hidden md:dark:hidden bg-img"
      />

      {/* desktop view */}
      <img
        src={bgDesktopLightImg}
        alt=""
        className="w-full h-1/3 hidden md:block dark:hidden bg-img"
      />
      <img
        src={bgDesktopDarkImg}
        alt=""
        className="w-full h-1/3 hidden md:dark:block bg-img"
      />

      <div className="fixed top-0 min-w-full flex justify-center flex-row">
        <div className="w-4/5 max-w-2xl h-screen overflow-y-scroll box-content no-scrollbar">
          <Header />
          <main>
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
