import express from 'express'

const router = express.Router();

router.get('api/users/signup', (req, res) => {
  res.send('Hi from current signup!')  
})

export {router as signupRouter}