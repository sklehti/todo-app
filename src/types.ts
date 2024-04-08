export interface Note {
  id: number;
  note: string;
  checked: boolean;
}

export type NoteWithoutId = Omit<Note, "id">;

export interface DragAndDrop {
  reodredList: Note[];
  setReodredList: React.Dispatch<React.SetStateAction<Note[]>>;
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

export interface SelectedNotesProp {
  notes: Note[];
  setShowNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
