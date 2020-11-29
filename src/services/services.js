import axios from 'axios'

const BACKEND = process.env.VUE_APP_ROOT_API

const COMPLETE_API = BACKEND + '/complete?query='

const getComplete = async (text) => {
  const url = COMPLETE_API + text
  const ret = await axios.get(url)
  return ret.data
}

export {
  getComplete
}
