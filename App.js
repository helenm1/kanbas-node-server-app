import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
// const express = require('express')
const app = express()
Hello(app);
Lab5(app);
app.listen(4000)