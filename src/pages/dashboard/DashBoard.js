//CSS
import styles from './dashboard.module.css'

//router
import { Link } from 'react-router-dom'

//hooks
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const DashBoard = () => {

  const { user } = useAuthValue()
  const uid = user.uid

  //posts do usuario
  const { documents: posts } = useFetchDocuments("posts", null, uid)

  return (
    <div>
        <h2>dashboard</h2>
        <p>Gerencie seus posts</p>
        {posts && posts.length === 0 ? (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            <Link className="btn" to="/posts/create">Criar primeiro post</Link>
          </div>
        ) : (
          <div>
            <p>TEM POST!</p>
          </div>
        )}
        {posts && posts.map((post) => <h3>{post.title}</h3> )}
    </div>
  )
}

export default DashBoard