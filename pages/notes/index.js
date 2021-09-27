import NextLink from 'next/link'
import PageTransition from '@comp/page-transition'
import PageTitle from '@comp/page-title'
import medium from '@lib/medium'
import devto from '@lib/devto'

function NotePage({ posts }) {
  return (
    <PageTransition>
      <div className="c-small">
        <PageTitle>Kendime notlar</PageTitle>
        <p>
          bu sayfa henüz beta aşamasında. medium'da yayınladığım yazıları en
          kısa sürede buraya taşıyacağım inş :)
        </p>

        <div className="mt-20">
          {posts.length ? (
            posts.map((post) => (
              <article key={post.slug} className="mb-10">
                <NextLink href={post.url} passHref>
                  <a className="text-lg leading-6 font-bold text-highlight">
                    {post.title}
                  </a>
                </NextLink>
                <p>
                  <time>{post.readableDate}</time>
                </p>
              </article>
            ))
          ) : (
            <p>Hiç not yazılmamış. İlginç...</p>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  let mediumPosts = await medium.getStories()
  let devtoPosts = await devto.getStories()

  const posts = mediumPosts
    .concat(devtoPosts)
    .sort(function (a, b) {
      return b.date - a.date
    })
    .map((post) => (({ date, ...o }) => o)(post))

  return {
    props: {
      posts
    },
    revalidate: 86400
  }
}

export default NotePage
