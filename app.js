// const express = require("express");
// const https = require("https");
// const cors = require("cors");
// require("dotenv").config();

// const bodyParser = require("body-parser");
// const userRoute = require("./routes/user");
// const expenseRoute = require('./routes/expense')
// const paymentRoute = require('./routes/payment')
// const permiumRoute = require('./routes/permium')
// const passwordroute = require('./routes/password');
// const connectDb = require("./db/connect");
// const User = require('./models/user')
// const expenseUser = require('./models/expense')
// const Order = require('./models/order');
// const fileurl = require('./models/fileurl')
// const forgotpassword = require('./models/passwordReq')
// const path = require("path");
// const fs = require("fs");
// const connectDB = require("./db/connect");
// // const app = express();
// const app = express();
// const morgan = require('morgan')
// const helmet = require('helmet');

// //production
// const accessLogStream = fs.createWriteStream(
// 	path.join(__dirname,'access.log'),
// 	{flags:'a'}
// );
// app.use(morgan('combined',{stream:accessLogStream}));
// // production
// app.use(helmet())
// app.use(cors());

// //middlewares
// app.use(bodyParser.json());

// //routes
// app.use('/user',userRoute);
// app.use('/expense',expenseRoute)
// app.use('/purchase',paymentRoute)
// app.use('/premium',permiumRoute)
// app.use('/password',passwordroute)

// // app.use((req,res)=>{

// // 	res.sendFile(path.join(__dirname,`public/${req.url}`))
// // })  
 
// async function serverStart() {
// 	try { 
// 		await connectDB();
// 		app.listen(process.env.PORT, () => {
// 			console.log(`server listening on port ${process.env.PORT}...`);
// 		});
// 	} catch (error) {
// 		console.log(error); 
// 	}
// }
// serverStart();







const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); // Use dotenv for environment variables
const path = require("path"); // Import path for file serving
const connectDB = require("./db/connect");
const userRoute = require("./routes/user");
const expenseRoute = require('./routes/expense');
const paymentRoute = require('./routes/payment');
const premiumRoute = require('./routes/permium'); // Correct the typo
const passwordRoute = require('./routes/password.js'); // Correct the typo

const app = express();

// Load environment variables from a .env file
dotenv.config();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/user', userRoute);
app.use('/expense', expenseRoute);
app.use('/purchase', paymentRoute);
app.use('/premium', premiumRoute);
app.use('/password', passwordRoute);


// Serve static files (if needed)
// app.use(express.static(path.join(__dirname, 'public')));

async function serverStart() {
  try {
    await connectDB();
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server listening on port ${process.env.PORT || 3000}...`);
    });
  } catch (error) {
    console.error(error);
  }
}

serverStart();
