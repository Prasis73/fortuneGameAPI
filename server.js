const express=require("express");
const app=express();
const firebase=require("firebase-admin")
// import { getFirestore } from "firebase/firestore";
// app.use(express.json());
const credentials=require("./key.json")
// import { collection, doc, setDoc } from "firebase/firestore"; 

/* firebase.initializeApp({
    credentials:admin.credential.cert(credentials)
}) */
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

// const db=admin.firestore();







/* app.get('/read/all',async (req,res)=>{
    try{
        const userRef=db.collection("users");
        const response=await userRef.get();
        let responseArr=[];
        response.forEach(doc=>{
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    }
    catch(error){
        res.send(error);
    }
}) */




const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("Server is okay at ",PORT);
})
const firebaseConfig = {
    apiKey: "AIzaSyCjmiIX8H2ty0bgCeetCuJpx51VlmZgW7g",
    authDomain: "upwork-df50e.firebaseapp.com",
    projectId: "upwork-df50e",
    storageBucket: "upwork-df50e.appspot.com",
    messagingSenderId: "266788837318",
    appId: "1:266788837318:web:5685af3905de9ca25b84c7",
    measurementId: "G-DK2EK7FQF1"
  }; 
 firebase.initializeApp({
    credentials:firebase.credential.cert(credentials),
    firebaseConfig

 }
    )
  const db=firebase.firestore()
// const appp = initializeApp(firebaseConfig);
// const db = getFirestore(appp);

// const citiesRef = collection(db, "cities");
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }


app.get('/',(req,res)=>{
    (async()=>{
     /*    try{
            let response=[]
            await db.collection('users').get().then(querysnapshot=>{
                let docs=querysnapshot.docs;
                for(let docs of docs)
                {
                    response.push(docs.data())
                }
                return res.status(200).send(response)
            })
        }
        catch(error){
            return res.status(500).send(error)
        } */
    })()
})

app.get('/create',async(req,res)=>{
     setInterval(()=>{
        console.log("ok");
        db.collection("randomNumber").doc("random").set({"number":between(1,9)}).then(()=>{
            console.log('success')
        }).catch((err)=>{
           console.log(err)
        });
},60000)
});
/* 
app.get('/',async (req,res)=>{
    try{
    await db.collection("randomNumber").doc("L5gEWlBhQ4QgrGtKcLoG").update({
        number:5
     })}
     catch(e){
        console.log(e)
        console.log("k vayo")
     }
   console.log("dimakh kharab")
})


app.post("/create",async(req,res)=>{
    const data=req.body;
    console.log("data of users",data);
    await firebase.firestore().collection("Users").add(data);
    res.send({msg:"user added"});
})

const port=process.env.port || 5000
app.listen(port,()=>{
    console.log("Server is running in port ", port)
})
 */

/* app.post("/create",async(req,resp)=>{
    const data=req.body
    await User.add(data)
    resp.send({
        msg:"Random Number Added"
    })
})

app.listen(4000,()=>console.log("server is up")) */