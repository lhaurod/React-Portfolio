import React from 'react'
import './portfolio.css'
import { FaGithub } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'

// THREE OF MY PROJECTS.....

const data = [
  {
    id: 1,
    title: 'Weather App',
    desc: 'A weather dashboard so that the user would be able to see the weather forecast for multiple cities. Technologies: HTML, CSS Bootstrap, jQuery, Moment.js and Open Weather API',
    github: 'https://github.com/lhaurod/weather-app.git'
  },

  {
    id: 2,
    title: 'Note Taker',
    desc: 'A note taker application used to write and save notes allowing the users to better organize their thoughts. Technologies: Node.js and its dependencies, Insomnia and Express.js',
    github: 'https://github.com/lhaurod/note-taker.git'
  },
  {
    id: 3,
    title: 'Book Search ',
    desc: 'A Google Books API search engine built with RESTful API and refactor it to be a GraphQL API built with Apollo Server and using the MERN technologies - MongoDB, Express, React and Node',
    github: 'https://github.com/lhaurod/Book-Search.git'
  },


]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><GrDeploy />Deployed Link</a>
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