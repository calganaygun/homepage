import NextImage from 'next/image'
import PageTransition from '@comp/page-transition'
import Social from '@comp/social'
import A from '@comp/a'

function HomePage() {
  return (
    <PageTransition>
      <div className="c-small">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-highlight">
            I'm Çalgan.
            <br />
            A software developer living in Warsaw.
          </h1>

          <p className="text-xl">
            I'm deeply interested in cloud technologies, amateur radio, IoT, back-end technologies,
            photography, and model rocketry.
          </p>

          <p className="text-xl">
            I write articles and create content about things I find interesting and enjoy.
          </p>
        </div>

        <div className="mt-8">
          <A
            blank
            href="https://superpeer.com/calganaygun"
            className="
            block py-4 px-6 bg-yellow-100 text-yellow-900 rounded-xl
            hover:bg-opacity-75
            dark:bg-blue-900 dark:bg-opacity-50 dark:text-blue-400"
            disabled={true}
          >
            If you want to have a 1:1 meeting with me, you can purchase a suitable time slot from my Superpeer profile ⟶
          </A>
        </div>
        <div className="mt-10">
          <Social />
        </div>
      </div>
{/*       <div className="c-large mt-20">
        <NextImage
          src="/photos/i-am.jpg"
          alt="Adem ilter"
          width={1433}
          height={1018}
          layout="responsive"
        />
      </div> */}
    </PageTransition>
  )
}

export default HomePage
