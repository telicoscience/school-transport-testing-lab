import type { Student, StudentStatus } from '../types';

export function filterStudentsByName(students: Student[], searchTerm: string): Student[] {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return students;
  }

  return students.filter((student) =>
    student.name.toLowerCase().includes(normalizedSearch),
  );
}

export function filterStudentsByStatus(
  students: Student[],
  status: StudentStatus | 'ALL',
): Student[] {
  if (status === 'ALL') {
    return students;
  }

  return students.filter((student) => student.status === status);
}

export function filterStudents(
  students: Student[],
  searchTerm: string,
  status: StudentStatus | 'ALL',
): Student[] {
  return filterStudentsByStatus(filterStudentsByName(students, searchTerm), status);
}
