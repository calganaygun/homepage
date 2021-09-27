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
            Ben Çalgan.
            <br />
            Ankara'da yaşayan bir yazılım geliştiriciyim.
          </h1>

          <p className="text-xl">
            Cloud teknolojileri, telsizcilik, IoT, back-end teknolojileri,
            fotoğrafçılık ve model roketçilik ile yakından ilgileniyorum.
          </p>

          <p className="text-xl">
            Eğlendiğim ve ilgi duyduğum şeyler hakkında çeşitli yazılar yazıyor
            ve içerikler hazırlıyorum.
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
          >
            Benimle 1:1 görüşmek istersen, Superpeer profilimden uygun bir zaman
            dilimini satın alabilirsin ⟶
          </A>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </div>

      <div className="c-large mt-20">
        <NextImage
          src="/photos/i-am.jpg"
          alt="Adem ilter"
          width={1433}
          height={1018}
          layout="responsive"
        />
      </div>
    </PageTransition>
  )
}

export default HomePage
