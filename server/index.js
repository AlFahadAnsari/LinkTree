import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/user.route.js';

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://link-tree-front-end-one.vercel.app',
  methods: ['GET', 'POST'], 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

app.use(express.json());

try {
  await mongoose.connect('mongodb+srv://ansari:alfahad@assignments.cniqwxv.mongodb.net/UserData');
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

// Define router
app.use('/user', router);

app.get('/',(req,res)=>{
  res.send('hii i am home page')
  )

app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
