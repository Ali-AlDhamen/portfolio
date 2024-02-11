import AnalyticsDashboard from '../../components/AnalyticsDashboard'
import { getDate } from '../../utils'
import { analytics } from '../../utils/analytics'

const Page = async () => {
  const TRACKING_DAYS = 7

  const pageviews = await analytics.retrieveDays('pageview', TRACKING_DAYS)
  const socialMedia = await analytics.retrieveDays('socialMedia', TRACKING_DAYS)
  

  const totalPageviews = pageviews.reduce((acc, curr) => {
    return (
      acc +
      curr.events.reduce((acc, curr) => acc + Object.values(curr)[0], 0) 
      
    )
  }, 0)



  const avgVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1)

  const amtVisitorsToday = pageviews
    .filter((ev) => ev.date === getDate())
    .reduce((acc, curr) => {
      return (
        acc +
        curr.events.reduce((acc, curr) => acc + Object.values(curr)[0], 0)
      )
    }, 0)

    const totalSocialMediaClicks = socialMedia.reduce((acc, curr) => {
      return (
        acc +
        curr.events.reduce((acc, curr) => acc + Object.values(curr)[0], 0) 
        
      )
    }, 0)
  
    
    const avgSocialMediaClicksPerDay = (totalSocialMediaClicks / TRACKING_DAYS).toFixed(1)

    const amtSocialMediaClicksToday = socialMedia
      .filter((ev) => ev.date === getDate())
      .reduce((acc, curr) => {
        return (
          acc +
          curr.events.reduce((acc, curr) => acc + Object.values(curr)[0], 0)
        )
      }, 0)

    

  const topCountriesMap = new Map<string, number>()

  for (let i = 0; i < pageviews.length; i++) {
    const day = pageviews[i]
    if (!day) continue

    for (let j = 0; j < day.events.length; j++) {
      const event = day.events[j]
      if (!event) continue

      const key = Object.keys(event)[0]
      const value = Object.values(event)[0]

      const parsedKey = JSON.parse(key)
      const country = parsedKey?.country

      if (country) {
        if (topCountriesMap.has(country)) {
          const prevValue = topCountriesMap.get(country)
          topCountriesMap.set(country, prevValue + value)
        } else {
          topCountriesMap.set(country, value)
        }
      }
    }
  }
  
  const socialMediaMap = new Map<string, number>()
  
  for (let i = 0; i < socialMedia.length; i++) {
    const day = socialMedia[i]
    if (!day) continue

    for (let j = 0; j < day.events.length; j++) {
      const event = day.events[j]
      if (!event) continue

      const key = Object.keys(event)[0]
      const value = Object.values(event)[0]

      const parsedKey = JSON.parse(key)
      const social = parsedKey?.social

      if (social) {
        if (socialMediaMap.has(social)) {
          const prevValue = socialMediaMap.get(social)
          socialMediaMap.set(social, prevValue + value)
        } else {
          socialMediaMap.set(social, value)
        }
      }
    }
  }

  const topCountries = [...topCountriesMap.entries()].sort((a ,b) => {
    if(a[1] > b[1]) return -1
    if(a[1] < b[1]) return 1
    return 0
  }).slice(0, 5)

  return (
    <div className='flex items-center justify-center w-full min-h-screen py-12'>
      <div className='relative w-full max-w-6xl mx-auto text-white'>
        <AnalyticsDashboard
          avgVisitorsPerDay={avgVisitorsPerDay}
          amtVisitorsToday={amtVisitorsToday}
          timeseriesPageviews={pageviews}
          topCountries={topCountries}
          avgSocialMediaClicksPerDay={avgSocialMediaClicksPerDay}
          amtSocialMediaClicksToday={amtSocialMediaClicksToday}
          socialMediaMap={[...socialMediaMap.entries()]}
          
        />
      </div>
    </div>
  )
}

export default Page
