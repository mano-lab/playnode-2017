import axios from 'axios'
import { UserPayload } from './types'

async function fetchData() {
  const response = await axios.get('http://localhost:3000')
  const data: UserPayload = response.data

  console.log(data.user.profileName, data.user.email)
}
fetchData()
