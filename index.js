// const express=require('express');
// const mongoose = require('mongoose');
// const cors=require('cors');

// const mongo_url="mongodb+srv://guptaansh912:guptaansh912@cluster0.kc57p0u.mongodb.net/BooksData?retryWrites=true&w=majority&appName=Cluster0"

// 

// const app = express();
// const port =3000;

// app.use(express.json());
// app.use(cors());

// mongoose.connect( mongo_url)
// .then(()=>{
//     console.log("connected to database")
// })
// .catch((err)=>{
//     console.log("there is a error in connection with mongo",err)
// })

// app.use('/',booksRoutes)

// app.listen(port,()=>{
//     console.log(`app is running on http;//localhost:${port}`)
// });


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const booksRoutes = require('./Routes/booksRoute'); // Ensure the path is correct

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://guptaansh912:guptaansh912@cluster0.kc57p0u.mongodb.net/BooksApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use the booksRoutes for routes starting with /books
app.use('/', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


