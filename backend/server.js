const express = require("express");
const mainRouter = require("./routes/index");
const app = express()
const port = 3000;
const cors = require("cors")



app.use(cors());
app.use(express.json());
app.use("/api/v1",mainRouter);



app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})