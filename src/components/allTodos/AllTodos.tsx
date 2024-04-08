import "./AllTodos.css";
import checkIcon from "../../assets/images/icon-check.svg";
import React, { DragEvent } from "react";
import crossIcon from "../../assets/images/icon-cross.svg";
import { AllNotesWithStateHandling, Note } from "../../types";
import TodosInfo from "./TodosInfo";

const AllTodos = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  const dragItem: any = React.useRef<HTMLInputElement>(null);
  const dragOverItem: any = React.useRef<HTMLInputElement>(null);

  const handleClickEvent = (e: React.MouseEvent<HTMLInputElement>) => {
    handleCheckbox(e.currentTarget.id);
  };

  const handleKeyDownEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleCheckbox(e.currentTarget.id);
    }
  };

  const handleCheckbox = (id: string) => {
    const newArray = notes.map((n) =>
      n.note === id ? { ...n, checked: !n.checked } : n
    );

    setShowNotes(newArray);
    setNotes(newArray);
  };

  const deleteNote = (e: React.FormEvent<HTMLButtonElement>) => {
    const newArray: Note[] = [];

    notes.map((n) => {
      n.note === e.currentTarget.value ? n : newArray.push(n);
    });

    setShowNotes(newArray);
    setNotes(newArray);
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    dragItem.current = e.currentTarget.id;
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    dragOverItem.current = e.currentTarget.id;
  };

  const drop = async () => {
    // reorder showNotes
    const copyListItems: Note[] = [...showNotes];
    const dragItemContent = copyListItems[dragItem.current];
    const overedItem = copyListItems[dragOverItem.current];

    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);

    // reorder notes
    const index = notes.findIndex((o) => o.id === overedItem.id);

    const copyMainListItems: Note[] = [...notes];
    const dragMainListItemContent = copyMainListItems[dragItem.current];
    copyMainListItems.splice(dragItem.current, 1);
    copyMainListItems.splice(index, 0, dragMainListItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setShowNotes(copyListItems);
    setNotes(copyMainListItems);
  };

  return (
    <section className="my-6 rounded-md bg-white dark:bg-gray-700 box-border">
      {showNotes.map((n, index) => (
        <React.Fragment key={index}>
          <div
            className="flex flex-row justify-between"
            draggable
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={drop}
            id={index.toString()}
          >
            <div className="relative flex justify-center flex-col">
              {n.checked ? (
                <p className="p-5 x-2 pl-16  todo-input line-through text-gray-200 dark:text-gray-400">
                  {n.note}
                </p>
              ) : (
                <p className="p-5 x-2 pl-16  todo-input text-gray-800 dark:text-gray-200">
                  {n.note}
                </p>
              )}
              <div className="absolute cursor-pointer text-xl select-none pl-5 flex justify-center flex-col">
                <input
                  aria-hidden="true"
                  readOnly
                  type="checkbox"
                  checked={n.checked}
                  tabIndex={-1}
                  name="checkmark"
                  className="opacity-0 cursor-pointer checkbox-input"
                />
                <div
                  aria-hidden="true"
                  tabIndex={0}
                  id={n.note}
                  role="checkbox"
                  aria-checked={n.checked}
                  onClick={handleClickEvent}
                  onKeyDown={handleKeyDownEvent}
                  className="absolute h-5 w-5 rounded-full border hover:bg-gray-200 flex items-center justify-center checkmark"
                >
                  <img
                    src={checkIcon}
                    alt="checkmark icon"
                    style={n.checked ? {} : { display: "none" }}
                  />
                </div>
              </div>
            </div>

            <button
              className="flex items-center p-5 hover:bg-slate-100"
              value={n.note}
              onClick={deleteNote}
            >
              <img src={crossIcon} className="w-3 h-3" alt="delete button" />
            </button>
          </div>
          <hr className="dark:border-[#777A92]" />
        </React.Fragment>
      ))}

      <TodosInfo
        notes={notes}
        setNotes={setNotes}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
      />
    </section>
  );
};

export default AllTodos;
