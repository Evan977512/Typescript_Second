// const person: {
//   name: string;
//   age: number;
// } = {

/**
 * TUPLES = FIXED LENGTH ARRAY also FIXED TYPE
 * role: [number, string]; // tuple
 */

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple

// } = {
//   name: "Evan",
//   age: 30,
//   hobbies: ["Wall Climbing, Coding"],
//   role: [2, "author"],
// };

/**
 * Enum = {NEW, OLD} = Added by typescript: Automatically enumerated global constant identifiers
 */

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

const person = {
  name: "Evan",
  age: 30,
  hobbies: ["Wall Climbing, Coding"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role.push(242);

// person.role[1] = 10;
// person.role = [4, "admin"];
console.log("person.role: ", person.role);

let favouriteActivities: any[];
favouriteActivities = ["walking", "gaming", 44];

let favouriteActivities2: string[];
favouriteActivities2 = ["walking", "gaming"];

console.log(person.name);

// each element is saved in a variable called hobby
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
