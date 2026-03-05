// // const products=[
// //     {id:1,name:"product1",price:25},
// //     {id:2,name:"product2",price:50},
// //     {id:3,name:"product3",price:45}
// // ]
// // let cart = []
// // function displayProducts(){
// //     products.forEach((product)=>{
// //         console.log(product)
// //     })
// // }
// // function displayCart(){
// //     const r=products.filter((product)=>product.price>45);
// //     console.log(r)
// //      let cart={...r,quantity:1};
// //     console.log(cart)
// // }
// // displayProducts()
// // displayCart()
// const products=[
//      {id:1,name:"product1",price:25},
//      {id:2,name:"product2",price:50},
//     {id:3,name:"product3",price:45}
// ]
// let cart = [];
// function displayProducts(){
//      products.forEach((product)=>{
//        console.log(product)
//    })
//  }
 
//  function addToCart(id){
//     const prod=products.find((product)=>product.id===id)
//     if(prod){
//          cart.push({...prod})
//          console.log(`add to cart ${prod.name}`)
//     }
    
//  }
//  function displayCart(){
//     let c={...cart,quantity:1}
//     console.log(c)
//  }
//  displayProducts()
//  addToCart(2)
//   displayCart()
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 45 },
];
let cart = []
//Display all products using forEach
function displayProducts(){
    products.forEach((product)=>console.log(product));
}

//Add product 2 to cart using spread operator with a
//new key quanity and assign 1
function addToCart(id){
    p=products.filter((product)=>product.id==id);
    cart=[...cart,p]
}
//display cart
function displayCart(){
    console.log(cart)
}

displayProducts()
addToCart(2)
displayCart()
addToCart(1)
displayCart()



