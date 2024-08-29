import jwt from 'jsonwebtoken'
import { log, logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const token = jwt.sign(payload, secretKey)
logColored('Token:', 'red', token)

const decodedPayload = jwt.verify(token, secretKey)
logColored('Decoded payload:', 'blue', decodedPayload)

try {
  const fakeToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFnZSI6MjUsImlhdCI6MTcyNDk1MjkyOH0.PVkInstV3JaM2EpJrQHVFSsadsdf5EjO25eFj1qEC6dNTAYA'
  const payload = jwt.verify(fakeToken, secretKey)
  logColored('Decoded payload 2:', 'bgRed', payload)
} catch (err) {
  log(err.message, 'bgRedBright')
}
