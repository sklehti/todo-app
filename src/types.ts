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
