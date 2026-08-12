const users = [
    {
        id: 1,
        name: "Alice",
        age: 22,
        skills: ["JavaScript", "React"],
        active: true
    },
    {
        id: 2,
        name: "Bob",
        age: 17,
        skills: ["HTML", "CSS"],
        active: false
    },
    {
        id: 3,
        name: "Charlie",
        age: 25,
        skills: ["JavaScript", "Node.js", "MongoDB"],
        active: true
    },
    {
        id: 4,
        name: "David",
        age: 19,
        skills: ["Python", "Django"],
        active: true
    }
];

const processUsers = (users) => {
    return users
        .filter(user => user.active === true)
        .filter(({ age }) => age >= 18)
        .map(({ id, name, age, skills }) => ({
            id,
            name,
            age,
            skillCount: skills.length,
            hasJavaScript: skills.includes("JavaScript")
        }))
        .sort((a, b) => b.skillCount - a.skillCount);
};

console.log(processUsers(users));

/*
Expected:

[
    {
        id: 3,
        name: "Charlie",
        age: 25,
        skillCount: 3,
        hasJavaScript: true
    },
    {
        id: 1,
        name: "Alice",
        age: 22,
        skillCount: 2,
        hasJavaScript: true
    },
    {
        id: 4,
        name: "David",
        age: 19,
        skillCount: 2,
        hasJavaScript: false
    }
]
*/