import SiteConfig from '../site.config'
import A from '@comp/a'
import IconTwitter from '@comp/icons/twitter'
import IconYoutube from '@comp/icons/youtube'
import IconGithub from '@comp/icons/github'
import IconInstagram from '@comp/icons/instagram'
import IconGDE from './icons/gde'

function SocialButton({ href, noStyle, children }) {
  return (
    <A
      href={href}
      blank
      className={
        noStyle
          ? ''
          : 'flex items-center p-3 bg-gray-200 text-gray-600 rounded-full transition-colors hover:bg-opacity-75 dark:bg-gray-700 dark:text-gray-300'
      }
    >
      {children}
    </A>
  )
}

function Social() {
  return (
    <>
      <div className="flex items-center space-x-3 mt-8">
        <SocialButton href={'mailto:' + SiteConfig.author.email}>
          <span className="mx-2 font-semibold">Email</span>
        </SocialButton>

        <SocialButton href={SiteConfig.social.twitter}>
          <IconTwitter />
        </SocialButton>

        <SocialButton href={SiteConfig.social.github}>
          <IconGithub />
        </SocialButton>

        <SocialButton href={SiteConfig.social.instagram}>
          <IconInstagram />
        </SocialButton>
      </div>
      <div className="flex items-center space-x-3 mt-8">
        <SocialButton href={SiteConfig.social.gdev} noStyle>
          <IconGDE size={72} />
        </SocialButton>
      </div>
    </>
  )
}

export default Social
