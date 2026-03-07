function greet(name, callback) {
  callback();
  console.log(`Welcome ${name}`)
}
greet("Snehitha", () => {
  console.log("Hello");
});
