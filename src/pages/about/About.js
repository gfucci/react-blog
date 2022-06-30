//CSS
import styles from './About.module.css'

import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router'

const About = () => {

  const navigate = useNavigate()
  navigate("/posts/create")

  return (
    <div className={styles.about}>
      <h2>
        Sobre o projeto
        React <span>blog</span>
      </h2>
      <p>Este projeto consiste em um blog feito com o React no front-end e firebase no back-end</p>
      <Link to={navigate} className="btn">
        Criar Post
      </Link>
      <a href="https://github.com/gfucci/react-blog" target="_blank" rel="noopener noreferrer" className='btn'>
        GitHub
      </a>
    </div>
  )
}

export default About