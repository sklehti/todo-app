/**
 * - tarkista löytyykö object
 * - tarkista ensin onko object tyyppiä
 * - löytyykö note ja checked nimillä
 * - tarkista toimiiko jo luodut funktiot
 * - palauta objekti
 *
 */

import { Note } from "./types";

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const parseString = (text: unknown): string => {
  if (!isString(text)) {
    throw new Error("Value is not a string!");
  }
  return text;
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean" || value instanceof Boolean;
};

export const parseBoolean = (value: unknown): boolean => {
  if (!isBoolean(value)) {
    throw new Error("Value is not a number!");
  }
  return value;
};

export const toNewNote = (object: unknown) => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect type");
  }

  if ("note" in object && "checked" in object) {
    const newEntry: Note = {
      note: parseString(object.note),
      checked: parseBoolean(object.checked),
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};
