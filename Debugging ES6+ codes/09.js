const students = [
    {
        name: "Rahim",
        marks: [80, 75, 90]
    },
    {
        name: "Karim",
        marks: [55, 60, 48]
    },
    {
        name: "Sakib",
        marks: [95, 88, 92]
    },
    {
        name: "Nabil",
        marks: [30, 45, 25]
    }
];

const getResults = (students) => {
    return students
        .map(({ name, marks }) => {


            const total = marks.reduce((sum, mark) => {
                return sum + mark
            }, 0);

            const average = total / marks.length;

            let grade;

            if (average >= 80) {
                grade = "A+";
            } else if (average >= 70 && average < 80) {
                grade = "A";
            } else if (average >= 60 && average < 70) {
                grade = "B";
            } else if (average >= 50 && average < 60) {
                grade = "C";
            } else {
                grade = "F";
            }

            return {
                name,
                total,
                average,
                grade
            };
        })
        .filter(({ grade }) => grade !== "F")
        .sort((a, b) => b.average - a.average);
};

console.log(getResults(students));

/*
Expected order:

Sakib  -> A+
Rahim  -> A+
Karim  -> C

Nabil should be removed.
*/