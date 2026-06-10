export type Student = {
	id: number; 
	name: string; 
	status: "ON_ROUTE" | "ARRIVED" | "ABSENT";
}; 

export function filterStudentsByName(
	Students: Student[], 
	searchTerm: string
): Student[] {
	const normalizedSearch = searchTerm.trim().toLowerCase();

	if(!normalizedSearch) {
		return Students;
	}

	return Students.filter((Student) => Student.name.toLowerCase().includes(normalizedSearch)
	);
	
}
