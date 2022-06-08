import { getBookmark } from '@lib/raindrop'
import BookmarkCard from '@comp/bookmark-card'
import PageTransition from '@comp/page-transition'
import groupBy from 'lodash.groupby'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'
import { tr } from 'date-fns/locale'
import PageTitle from '@comp/page-title'
import { Bookmark } from '@type/bookmark'
import A from '@comp/a';
import { useEffect, useState } from 'react'

function BookmarkPage({ data, weeks }) {

  function filterBookmarksByDate(filter, weeks) {
    if(filter === "") return weeks
    return weeks.filter(date => {return data[date].find(item => item.tags.includes(filter))})
  }
  function filterBookmarksByTag(filter, bookmarks: Bookmark[]) {
    if(filter === "") return bookmarks
    return bookmarks.filter(item => item.tags.includes(filter))
  }


  const [filter, setFilter] = useState("");

  useEffect(() => {
      setFilter(window.location.hash.slice(1) || "")

      const onHashChanged = () => {
          setFilter(window.location.hash.slice(1));
      };

      window.addEventListener("hashchange", onHashChanged);

      return () => {
          window.removeEventListener("hashchange", onHashChanged);
      };
  }, []);

  return (
    <PageTransition>
      <div className="c-small">
        <PageTitle>
          beğenip kendime not almak için kaydettiğim yazılar, siteler ve toollar. genelde benim ilgi alanlarıma yönelikler :D
        </PageTitle>
        

        {filter ? <div className="text-xl"><A href="#" className="text-sm text-gray-500">Filtreyi Temizle</A></div> : null}

        {filterBookmarksByDate(filter, weeks).map((date) => (
          <div key={date} className="mt-20">
            <h4
              className="
              text-2xl text-gray-400
              dark:text-gray-600"
            >
              {date}
            </h4>
            <div className="mt-6 space-y-6">
              {filterBookmarksByTag(filter, data[date]).map((item) => {
                return <BookmarkCard key={item._id} {...item} />
              })}
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  )
}

function getDateRangeOfWeek(day: Date){
  const startDay: string = format(startOfWeek(day, {weekStartsOn: 1}), "d.M", {locale: tr})
  const endDay: string = format(endOfWeek(day, {weekStartsOn: 1}), "d.M, yy", {locale: tr})

  return startDay + " - " + endDay
};

export async function getStaticProps() {
  const data: [Bookmark] = await getBookmark()

  const dataGroupByDay = groupBy(data, (item: Bookmark) => {
    const weekNumber: string = getDateRangeOfWeek(parseISO(item.created))
    return weekNumber
  })

  const weeks = Object.keys(dataGroupByDay)

  return {
    props: {
      data: dataGroupByDay,
      weeks
    },
    revalidate: 7200
  }
}

export default BookmarkPage
