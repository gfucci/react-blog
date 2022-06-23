//CSS
import styles from './About.module.css'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o projeto
        React <span>blog</span>
      </h2>
      <p>Este projeto consiste em um blog feito com o React no front-end e firebase no back-end</p>
      <Link to="posts/create" className="btn">
        Criar Post
      </Link>
      <Link to={{ pathname: "https://github.com/gfucci/react-blog" }} target="_blank" rel="noopener noreferrer" className='btn'>
        GitHub
      </Link>
    </div>
  )
}

export default About