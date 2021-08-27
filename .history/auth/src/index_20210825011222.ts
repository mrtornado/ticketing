import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import mongoose from 'mongoose'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter} from './routes/signout'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error-handeler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)
// Async error handling with express-async-errors
app.all('*', async (req, res) => {
	throw new NotFoundError()
})
// Async end

app.use(errorHandler)

const start = async () => {
	await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
}

app.listen(3000, () => {
	console.log('start on port 3000!');
});