import express = require('express')
import { UserPayload } from './types'

const app = express()

app.get('/', (req, res) => {
  const payload: UserPayload = {
    user: {
      profileName: 'Rokt33r',
      email: 'fluke8259@gmail.com'
    }
  }
  res.json(payload)
})

app.listen(3000, () => {
  console.log('listen')
})
