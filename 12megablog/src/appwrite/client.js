import { Client } from 'appwrite'
import conf from '../conf/conf'

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId)

let hasPinged = false

export const pingAppwrite = () => {
  if (hasPinged) return

  hasPinged = true
  return client.ping()
    .then(() => console.log('Appwrite connection successful'))
    .catch((error) => console.error('Appwrite connection failed', error))
}

export { client }