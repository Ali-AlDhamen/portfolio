import { NextRequest, NextResponse } from 'next/server'
import { analytics } from './utils/analytics'

export default async function middleware(req: NextRequest) {
  console.log('middleware', req.nextUrl.pathname)
  if (req.nextUrl.pathname === '/') {
    try {
      analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return NextResponse.next()
}

export const matcher = {
  matcher: [
    '/'
  ],
}
