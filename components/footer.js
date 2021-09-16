import React from 'react'
import A from '@comp/a'

function Footer() {
  return (
    <footer className="pb-14">
      <div className="c-small">
        <p>
          Bu web sitesinin kaynak kodlarına{' '}
          <A href="https://github.com/calganaygun/homepage" blank>
            Github üzerinden
          </A>{' '}
          ulaşabilirsiniz.
        </p>
      </div>
    </footer>
  )
}

export default Footer
