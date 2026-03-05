// const obj = {
//   name: "Geetika",
//   skill: "Java",
// };
// console.log(obj)

const obj = new Object()
obj.name = "Snehitha"
obj.skill = "ML"
console.log(obj)

obj.score = 97
console.log(obj)

obj["rank"] = 1
console.log(obj)

let key = "city"
let value = "Hyderabad"
obj[key] = value // obj.key will store key not city
console.log(obj)

delete obj.skill 
console.log(obj)
