import express from 'express'
import {body} from 'express-validator'

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  const { email, password } = req.body;
  
  // new User({ email, password })
})

export {router as signupRouter}