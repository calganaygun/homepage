import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import parseISO from 'date-fns/parseISO'
import { tr } from 'date-fns/locale'
import A from '@comp/a'
import { Bookmark } from '@type/bookmark' 

function BookmarkCard(item: Bookmark) {
  return (
    <div key={item._id}>
      <h3 className="text-lg leading-6 font-bold text-highlight">
        <A href={item.link} blank>
          {item.title}
        </A>
      </h3>

      {<p className="text-gray-500 truncate">{item.excerpt}</p>}

      <div className="mt-1 flex items-center text-gray-250">
        {item.tags.map(tag => (<A href={'#' + tag} key={item._id + tag}>{"#" + tag}</A>)).reduce((prev, curr) => prev.length ? [prev, <span>・</span>, curr] : [curr], [])}
      </div>
      <div className="mt-1 flex items-center text-gray-250">
        <span>{item.domain}</span>
        <span>・</span>
        <span>
          {formatDistanceToNowStrict(parseISO(item.created), {
            addSuffix: true,
            locale: tr
          })}
        </span>
      </div>
    </div>
  )
}

export default BookmarkCard
