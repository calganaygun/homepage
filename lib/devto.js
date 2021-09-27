import parse from 'date-fns/parse'
import parseISO from 'date-fns/parseISO'
import { tr } from 'date-fns/locale'
import format from 'date-fns/format'

class Devto {
  constructor() {
    this.devtoUsername = 'calganaygun'
  }

  async getData(url) {
    const res = await fetch(url, {
      method: 'get'
    })
    return await res.json()
  }

  async getStories() {
    const url = `https://dev.to/api/articles?username=${this.devtoUsername}`
    const apiResponse = await this.getData(url)
    return apiResponse.map((post) => {
      const date = parseISO(post.published_at)
      const readableDate = format(date, 'd.M, yy', { locale: tr })
      return { ...post, date, readableDate }
    })
  }
}

export default new Devto()
