import "./AllTodos.css";
import checkIcon from "../../assets/images/icon-check.svg";
import React from "react";
import crossIcon from "../../assets/images/icon-cross.svg";
import { AllNotesWithStateHandling, Note } from "../../types";
import TodosInfo from "./TodosInfo";

const AllTodos = ({
  notes,
  setNotes,
  showNotes,
  setShowNotes,
}: AllNotesWithStateHandling) => {
  const handleCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    const newArray = notes.map((n) =>
      n.note === e.currentTarget.id ? { ...n, checked: !n.checked } : n
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

  return (
    <div className="my-6 rounded-md bg-white box-border">
      {showNotes.map((n, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-row justify-between">
            <div className="relative flex justify-center flex-col">
              <p
                className="p-5 x-2 pl-16  todo-input line-through"
                style={{
                  textDecoration: n.checked ? "line-through" : "none",
                  color: n.checked ? "rgb(229 231 235)" : "hsl(237, 14%, 26%)",
                }}
              >
                {n.note}
              </p>
              <div className="absolute cursor-pointer text-xl select-none pl-5 flex justify-center flex-col">
                <input
                  readOnly
                  type="checkbox"
                  checked={n.checked}
                  name="checkmark"
                  className="opacity-0 cursor-pointer checkbox-input"
                />
                <div
                  id={n.note}
                  role="button"
                  onClick={handleCheckbox}
                  className="absolute h-5 w-5 rounded-full border hover:bg-gray-200 flex items-center justify-center checkmark"
                >
                  <img src={checkIcon} alt="checkmark icon" />
                </div>
              </div>
            </div>

            <button
              className="flex items-center p-5"
              value={n.note}
              onClick={deleteNote}
            >
              <img src={crossIcon} className="w-3 h-3" alt="delete button" />
            </button>
          </div>
          <hr />
        </React.Fragment>
      ))}

      <TodosInfo
        notes={notes}
        setNotes={setNotes}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
      />
    </div>
  );
};

export default AllTodos;
