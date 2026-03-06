import express from "express";

const app = express();

app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})

const users=[
    {name:"Sne", email:"reddy@gmail.com", password:"shin"},
    {name:"Sat", email:"goud@gmail.com", password:"pig"},
    {name:"Shre", email:"patel@gmail.com", password:"dore"}
];

app.get("/login",(req,res)=>{
    res.render("login",{error:null});
});

app.post("/login",(req,res)=>{

    const {email,password}=req.body;

    let user=users.find((user)=> user.email === email);

    if(user){
        if(user.password === password){
            res.redirect("/");
        }else{
            res.render("login",{message:"Invalid Password"});
        }
    }else{
        res.render("login",{message:"User not found"});
    }

});

app.get("/register",(req,res)=>{
    res.render("register",{error:null});
});

app.post("/register",(req,res)=>{

    const {name,email,password}=req.body;

    let user=users.find((user)=> user.email === email);
    if(user){
        res.send("register",{error:"already exits"});
    }
    else{
        users.push({
            name:name,
            email:email,
            password:password,
        })
        res.redirect("/")
    }

    

});
app.get("/",(req,res)=>{
    res.render("dashboard",{users});
});

