import parse from 'date-fns/parse'
import parseISO from 'date-fns/parseISO'
import { tr } from 'date-fns/locale'
import format from 'date-fns/format'

class Medium {
  constructor() {
    this.mediumRSS = 'https://medium.com/feed/@calganaygun'
  }

  async getData(url) {
    const res = await fetch(url, {
      method: 'get'
    })
    return await res.json()
  }

  async getStories() {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${this.mediumRSS}`
    const stories = await this.getData(url)
    return stories.items.map((post) => {
      const date = parse(post.pubDate, 'yyyy-MM-dd HH:mm:ss', 0)
      const readableDate = format(date, 'd.M, yy', { locale: tr })
      return {
        url: post.link,
        title: post.title,
        date,
        readableDate,
        slug: post.guid.split('/')[4] // guid is a url like: https://medium.com/p/d0dfe2fd246e
      }
    })
  }
}

export default new Medium()
