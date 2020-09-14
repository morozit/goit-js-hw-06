console.log("Задача 5-1");
// ? Як добавити обєкт в коструктор функції а не строку?

// TODO:  Variant-1
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };
// TODO: Variant-2
const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () {
  return `login : ${this.login}, email: ${this.email}`;
};
const user = new Account({ login: "Dima", email: "email" });
console.log(user.getInfo());

// TODO   |
// TODO  /|\
// TODO   |
// TODO   |

console.log(typeof Account.prototype.getInfo);
// function

const mango = new Account({ login: "Mangozedog", email: "mango@dog.woof" });
console.log(mango.getInfo());
// login : Mangozedog, email: mango@dog.woof

// const poly = new Account({ "Poly", "poly@mail.com" });
// console.log(poly.getInfo());
// login : Poly, email: poly@mail.com
