import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";
const app = express();
app.use(expressLayouts);
app.use(express.static("public"));
app.set("layout","layout");
app.set("view engine","ejs");
app.set("views","views");
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})

app.use(express.urlencoded({extended:true}));
app.use(
    session({
        secret:"mySecretKey",
        resave:false,
        saveUninitialized:false,
    })
)
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
            req.session.user=user;
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
    if(req.session.user){
    res.render("dashboard",{users});
    }
    else{
        res.redirect("/login");
    }
});

