import { Redis } from '@upstash/redis'


export const redis = new Redis({
  url: 'https://us1-equipped-killdeer-39095.upstash.io',
  token: process.env.REDIS_KEY,
})