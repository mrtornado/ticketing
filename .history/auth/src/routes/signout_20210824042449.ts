import express from 'express'

const router = express.Router();

router.get('api/users/signout', (req, res) => {
  res.send('Hi from current signout!')  
})

export {router as signoutRouter}