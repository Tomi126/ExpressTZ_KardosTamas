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

//azok a szobák kilistázása, ahol 3 vagy több ágy van, ágyak szerint növekvő sorrendben
app.get("/szobak3",(req,res)=>{
    const sql = "SELECT * FROM szobak WHERE agy>=3 ORDER BY agy ASC"
    db.query(sql,(err,result)=>{
        if(err) return res.json(err)
        return res.json(result)
    })
})

//azok a foglalások kilistázása, ahol az érkezés dátuma 2016.01.10-tól  2016.01.20 -ig van.
app.get("/foglalas",(req,res)=>{
    const sql = "SELECT * FROM foglalasok WHERE erk LIKE '2016-01-1%'"
    db.query(sql,(err,result)=>{
        if(err) return res.json(err)
        return res.json(result)
    })
})


app.listen(3000, () => {
    console.log("A szerver a 3000-es porton fut.")
})