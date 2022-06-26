import styles from './Post.module.css'

//hooks
import { useParams } from "react-router-dom"
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const { id } = useParams()
    const {document: post, loading, error} = useFetchDocument("posts", id)

  return (
    <div className={styles.post_container}>
        {loading && <p>carregando...</p>}
        {post && (
          <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p className={styles.createdBy}>post criado por {post.createdBy}</p>
            <p>{post.body}</p>
            <h3>Este texto trata sobre...</h3>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <p><span>#</span>{tag}</p>
              ))}
            </div>
          </>
        )}
        {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Post

/**
 * 
 */