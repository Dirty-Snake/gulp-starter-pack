class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// Использование:
const user = new User('Иван');
user.sayHi();
