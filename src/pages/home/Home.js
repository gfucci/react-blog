//CSSaaaa
import styles from './Home.module.css'

//hooks
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//components
import PostDetail from '../../components/PostDetail'

const Home = () => {

  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input 
          type="text" 
          name="text" 
          placeholder='Ou pesquise por tags' 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button className='btn btn_dark'>Pesquisar</button>
      </form>
      <div className={styles.home}>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link className='btn' to='/posts/create'>Criar primeiro post</Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Home