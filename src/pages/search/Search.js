import styles from './Search.module.css'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { Link } from "react-router-dom"

//components
import PostDetail from '../../components/PostDetail'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div>
          {posts && posts.length === 0 && (
            <>
              <p>Não foram encontrados posts a partir da sua busca...</p>
              <Link to="/" className="btn btn_dark">
                Voltar
              </Link>
            </>
          )}
          {posts && posts.map((post) => <PostDetail post={post} key={post.id} />)}
        </div>
    </div>
  )
}

export default Search