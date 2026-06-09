import { students } from '../data/students';
import { filterStudents, filterStudentsByName, filterStudentsByStatus } from '../utils/filters';

describe('student filters', () => {
  it('returns all students when search term is empty', () => {
    expect(filterStudentsByName(students, '')).toHaveLength(students.length);
  });

  it('filters students by name ignoring case', () => {
    const result = filterStudentsByName(students, 'sofia');

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Sofia Oliveira');
  });

  it('filters students by status', () => {
    const result = filterStudentsByStatus(students, 'IN_ROUTE');

    expect(result.every((student) => student.status === 'IN_ROUTE')).toBe(true);
  });

  it('combines name and status filters', () => {
    const result = filterStudents(students, 'sofia', 'IN_ROUTE');

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Sofia Oliveira');
  });
});
