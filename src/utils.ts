import { NoteWithoutId } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const parseString = (text: unknown): string => {
  if (!isString(text) || text.trim().length < 1) {
    throw new Error("Value is not a string or it completely missing!");
  }
  return text;
};

const isNumber = (value: unknown): value is number => {
  return typeof value === "number" || value instanceof Number;
};

export const parseNumber = (value: unknown): number => {
  if (!isNumber(value)) {
    throw new Error("Value is invalid.");
  }
  return value;
};

const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean" || value instanceof Boolean;
};

export const parseBoolean = (value: unknown): boolean => {
  if (!isBoolean(value)) {
    throw new Error("Value is invalid.");
  }
  return value;
};

export const toNewNote = (object: unknown) => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect type");
  }

  if ("note" in object && "checked" in object) {
    const newEntry: NoteWithoutId = {
      note: parseString(object.note),
      checked: parseBoolean(object.checked),
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};
