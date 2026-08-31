const users = [
  { name: "Rafi", age: 22, active: true },
  { name: "Nabil", age: 19, active: false },
  { name: "Sakib", age: 25, active: true }
];

function getActiveUsers(users) {
  return users.filter(user => user.active === true);
}

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

function getOldestUser(users) {
  return users.reduce((oldest, user) => {
    return user.age > oldest.age ? user : oldest;
  });
}

console.log(getActiveUsers(users));
console.log(getAverageAge(users));
console.log(getOldestUser(users));