//CSS
import styles from './dashboard.module.css'

//router
import { Link } from 'react-router-dom'

//hooks
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const DashBoard = () => {

  const { user } = useAuthValue()
  const uid = user.uid

  //posts do usuario
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

  const { deleteDocument } = useDeleteDocument("posts") 

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
        <h2>dashboard</h2>
        <p>Gerencie seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link className="btn" to="/posts/create">Criar primeiro post</Link>
          </div>
        ) : (
          <>
            <div className={styles.post_header}>
              <span>Title</span>
              <span>Ações</span>
            </div>
            {posts && 
              posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className='btn btn_outline'>Ver</Link>
                  <Link to={`/posts/edit/${post.id}`} className='btn btn_outline'>Editar</Link>
                  <button onClick={() => deleteDocument(post.id)} className='btn btn_outline btn_danger'>Excluir</button>
                </div>
              </div>
            ))}
          </>
        )}
        
    </div>
  )
}

export default DashBoard