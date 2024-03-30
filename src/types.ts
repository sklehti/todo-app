export interface Note {
  note: string;
  checked: boolean;
}

export interface AllNotes {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export interface AllNotesWithStateHandling {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  showNotes: Note[];
  setShowNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

// export enum Status {
//   All = "all",
//   Active = "active",
//   Completed = "completed",
// }

// export interface StatusHandling {
//   status: Status;
//   setStatus: React.Dispatch<React.SetStateAction<Status>>;
// }
