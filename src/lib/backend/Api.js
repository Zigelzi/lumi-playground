/* ----------
Mock data
------------ */
const categories = [
	{
		id: 1,
		name: 'Chest'
	},
	{
		id: 2,
		name: 'Back'
	},
	{
		id: 3,
		name: 'Legs'
	}
];

const exercises = [
	{
		id: 1,
		category_id: 1,
		name: 'Bench press',
		sets: 3,
		reps: 10,
		weight: 60
	},
	{
		id: 2,
		category_id: 1,
		name: 'Incline bench press',
		sets: 3,
		reps: 10,
		weight: 60
	},
	{
		id: 3,
		category_id: 1,
		name: 'Dumbell bench press',
		sets: 3,
		reps: 10,
		weight: 60
	},
	{
		id: 4,
		category_id: 2,
		name: 'Deadlift',
		sets: 3,
		reps: 10,
		weight: 60
	},
	{
		id: 5,
		category_id: 2,
		name: 'Low row',
		sets: 3,
		reps: 10,
		weight: 60
	},
	{
		id: 6,
		category_id: 2,
		name: 'Lat pulldown',
		sets: 3,
		reps: 10,
		weight: 60
	},
	{
		id: 7,
		category_id: 3,
		name: 'Barbell squat',
		sets: 3,
		reps: 10,
		weight: 80
	},
	{
		id: 8,
		category_id: 3,
		name: 'Hack squat',
		sets: 3,
		reps: 10,
		weight: 50
	},
	{
		id: 9,
		category_id: 3,
		name: 'Dumbell split squat',
		sets: 3,
		reps: 10,
		weight: 20
	}
];

export function fetchCategories() {
	return categories;
}

export function fetchExercises() {
	return exercises;
}
