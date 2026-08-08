// const user = {
//   name: "Karim",
//   age: 21
// };

// const updatedUser = {
//   ...user,
//   age: 22,
//   city: "Dhaka"
// };

// const getUser = (user) => {
//   const { name, age, city } = user;

//   return `${name} is ${age} years old and lives in ${City}`;
// };

// console.log(getUser(updatedUser));

// Expected Output:

// Karim is 22 years old and lives in Dhaka

const user = {
  name: "Karim",
  age: 21
};

const updatedUser = {
  ...user,
  age: 22,
  city: "Dhaka"
};

const getUser = (user) => {
  const { name, age, city } = user;

  return `${name} is ${age} years old and lives in ${city}`; // --> template string error
};

console.log(getUser(updatedUser));