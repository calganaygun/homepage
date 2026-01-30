import React from 'react'
import A from '@comp/a'

function Footer() {
  return (
    <footer className="pb-14">
      <div className="c-small">
        <p>
          You can access the source code of this website{' '}
          <A href="https://github.com/calganaygun/homepage" blank>
            on Github
          </A>.
        </p>
      </div>
    </footer>
  )
}

export default Footer
