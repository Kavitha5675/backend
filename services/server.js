const express = require('express')
const dbConnect = require('/Users/admin/Documents/Projects/personal/fullstack/backend/config/db/dbConnect.js')
// const direnv = require('direnv')
const app= express()
dbConnect().then(()=>{ /* TODO document why this arrow function is empty */ });
let port = 6000;
app.listen(port)

//DS39acV957k7HgMp