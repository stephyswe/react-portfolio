import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: 'https://github.com/stephyswe/crypto/blob/master/logo.png?raw=true',
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/stephyswe/crypto',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: 'https://github.com/stephyswe/carzone/raw/master/preview.png',
    title: 'Automotive car selling and re-buying',
    github: 'https://github.com/stephyswe/carzone',
    demo: 'https://glacial-retreat-43749.herokuapp.com/'
  },
  {
    id: 3,
    image: 'https://github.com/stephyswe/devchat/raw/master/header.png',
    title: 'Slack clone with interactive chat and messages',
    github: 'https://github.com/stephyswe/devchat',
    demo: 'https://github.com/stephyswe/devchat/raw/master/header.png'
  },
  {
    id: 4,
    image: 'https://github.com/stephyswe/devconnect/raw/master/preview.png',
    title: 'DevConnect - Social Network for Developers',
    github: 'https://github.com/stephyswe/devconnect',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: 'https://github.com/stephyswe/next-linkedin-clone/raw/main/preview.png?raw=true',
    title: 'LinkedIn Clone in NextJS',
    github: 'https://github.com/stephyswe/next-linkedin-clone',
    demo: 'https://next-linkedin-clone-chi.vercel.app/'
  },
  {
    id: 6,
    image: 'https://github.com/stephyswe/next-spotify-clone/raw/main/preview.png?raw=true',
    title: 'Spotify Clone in NextJS',
    github: 'https://github.com/stephyswe/next-spotify-clone',
    demo: 'http://next-spotify-clone-mocha.vercel.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio