const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql")

app.use(cors())
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    port:3307,
    password:"",
    database:"fogado"
})

app.get("/",(req,res)=>{
    res.send("A szerver fut.")
})


app.get("/szobak",(req,res)=>{
    const sql = "SELECT * FROM szobak"
    db.query(sql,(err,result)=>{
        if(err) return res.json(err)
        return res.json(result)
    })
})


app.listen(3000, () => {
    console.log("A szerver a 3000-es porton fut.")
})