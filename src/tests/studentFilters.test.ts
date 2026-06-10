import { describe, it, expect, beforeEach } from "@jest/globals";
import { filterStudentsByName, Student } from "../utils/studentFilters";

describe("filterStudentsByName", () => {
  let students: Student[];

  beforeEach(() => {
    students = [
      { id: 1, name: "Sofia Oliveira", status: "ON_ROUTE" },
      { id: 2, name: "Pedro Santos", status: "ARRIVED" },
      { id: 3, name: "Ana Beatriz", status: "ABSENT" },
    ];
  });

  it("should return students whose names match the search term", () => {
    const result = filterStudentsByName(students, "sofia");

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Sofia Oliveira");
  });

  it("should be case-insensitive", () => {
    const result = filterStudentsByName(students, "PEDRO");

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Pedro Santos");
  });

  it("should ignore extra spaces in the search term", () => {
    const result = filterStudentsByName(students, "  ana  ");

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Ana Beatriz");
  });

  it("should return all students when search term is empty", () => {
    const result = filterStudentsByName(students, "");

    expect(result).toHaveLength(3);
  });

  it("should return an empty array when no student matches", () => {
    const result = filterStudentsByName(students, "Carlos");

    expect(result).toHaveLength(0);
  });

  it("should return an empty array when students list is empty", () => {
    const result = filterStudentsByName([], "Sofia");

    expect(result).toEqual([]);
  });
});
