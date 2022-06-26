//CSS
import styles from './createpost.module.css'

//hooks
import { useState } from 'react'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useNavigate } from 'react-router'

const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("") 
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { response, insertDocument } = useInsertDocument("posts")

  const { user } = useAuthValue()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    //validate URL image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL");
    }

    //create array tags
    const tagArrays = tags.split(",").map((tag) => tag.trim().toLowerCase())

    //check values

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagArrays,
      uid: user.uid,
      createdBy: user.displayName,
    });

    //redirect URL
    navigate("/")
  }

  return (
    <div className={styles.createpost}>
      <h2>Criar Post</h2>
      <p>Crie um post para compartilhar o que quiser.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input 
            type="text"
            name='title'
            required 
            placeholder='Digite um bom titulo' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input 
            type="text"
            name='image'
            required 
            placeholder='Insira uma imagem que represente seu post' 
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Texto do post:</span>
          <textarea 
            name='body'
            required 
            placeholder='Insira o conteudo do post' 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
        </label>
        <label>
          <span>TAGS:</span>
          <input 
            type="text"
            name='tags'
            placeholder='Insira as tags separado por virgula' 
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        {!response.loading && <button className="btn">Postar</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  )
}

export default CreatePost