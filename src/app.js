import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=  express();

/*
app.use for mildleware and configuring the app.

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
*/

/*
In web development, credentials refer to things the browser sends along with requests to prove who you are:
 Cookies, Authorization headers (e.g., JWT tokens),  Client certificates
They’re required when a server needs to recognize and trust a request (like checking if a user is logged in).
*/

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true ,limit: '16kb' }));
app.use(express.static('public'));

// extended true means it will parse the data in the form of json and urlencoded
// static means it will serve the static files from the public folder like images, css, js etc. that stored in public folder.


export default app; 