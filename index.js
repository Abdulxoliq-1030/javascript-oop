// OOP - Constructor functions

// function User(name, lastName, birthday) {
//   this.name = name;
//   this.lastName = lastName;
//   this.birthday = new Date(birthday);
// }

// User.prototype.getBirthDayYear = function () {
//   return this.birthday.getFullYear();
// };

// User.prototype.getFullName = function () {
//   return `${this.name} ${this.lastName}`;
// };

// Classes
class User {
  constructor(name, lastName, birthday) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
  }

  getBirthDayYear() {
    return this.birthday.getFullYear();
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

// Instance object
const user1 = new User("John", "Doe", "1-2-1290");
const user2 = new User("Alex", "Fergusson", "1-2-1244");
console.log(user2);
