// const getUserInfo = (user) => {
//   const { name, age } = user;

//   return `${Name} is ${age} years old`;
// };

// console.log(getUserInfo({ name: "Rahim", age: 22 }));

// Expected Output:

// Rahim is 22 years old

const getUserInfo = (user) => {
  const { name, age } = user;

  return `${name} is ${age} years old`;
};

console.log(getUserInfo({ name: "Rahim", age: 22 }));