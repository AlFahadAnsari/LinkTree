import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/user.route.js'
let app = express()




app.use(cors(
  {
      origin: ["https://link-tree-front-end-one.vercel.app"],
      methods: ["POST", "GET"],
      credentials: true
  }
));
app.use(express.json())



try {
  mongoose.connect('mongodb+srv://ansari:alfahad@assignments.cniqwxv.mongodb.net/UserData')
  console.log('connected');
} catch (error) {
  console.log('error', error);
}


// define router
app.use('/user', router)




app.listen(2000, () => {
  console.log('Example app listening on port 2000');
});
