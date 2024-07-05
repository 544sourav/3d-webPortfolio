/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import { socialLinks } from "../data/index";

export const Footer = () => {
    return (
        <>
        <section className='cta'>
          <p className='cta-text'>
            Have a project in mind? <br className='sm:block hidden' />
            Let’s build something together!
          </p>
          <Link to='/contact' className='btn'>
            Let's talk
          </Link>
        </section>

        <footer className='footer font-poppins mt-8 '>
        <hr className='border-slate-200 ' />

        <div className='footer-container'>
        <p>
            © 2024 <strong>Sourav Sharma</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
            {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
                <img
                src={link.iconUrl}
                alt={link.name}
                loading="lazy"
                className='w-6 h-6 object-contain'
                />
            </Link>
            ))}
        </div>
        </div>
        </footer>
        </>
      );
}
