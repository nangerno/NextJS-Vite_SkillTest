import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { contact, about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const { social } = about
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className="contact-item">
      {social && (
          <>
            {social.email && (
              <a
                href={social.gmail}
                aria-label='gmail'
                className='link link--icon'
                style={{marginRight:'0.5em',fontSize:'3em'}}
              >
                <SiGmail />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                style={{marginRight:'0.5em',fontSize:'3em'}}
              >
                <FaGithub />
              </a>
            )}

            {social.skype && (
              <a
                href={social.skype}
                aria-label='skype'
                className='link link--icon'
                style={{marginRight:'0.5em',fontSize:'3em'}}
              >
                <FaSkype />
              </a>
            )}

            {social.discord && (
              <a
                href={social.discord}
                aria-label='discord'
                className='link link--icon'
                style={{fontSize:'3em'}}
              >
                <FaDiscord />
              </a>
            )}
          </>
      )}
      </div>
    </section>
  )
}

export default Contact
