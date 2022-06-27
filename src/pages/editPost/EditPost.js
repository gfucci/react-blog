//CSS
import styles from './editpost.module.css'

//hooks
import { useEffect, useState } from 'react'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useNavigate, useParams } from 'react-router'

const EditPost = () => {

  const { id } = useParams()
  const { document: post, response } = useFetchDocument("posts", id)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("") 
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  //fill form
  useEffect(() => {

    if (post) {
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)

      const textTags = post.tags.join(", ")

      setTags(textTags)
    }
  }, [post])

  const { user } = useAuthValue()

  const navigate = useNavigate()

  function handleSubmit() {

  }

  /*const handleSubmit = (e) => {
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
  }*/

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Edite seu post como desejar.</p>
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
            <h3>Preview da Imagem:</h3>
            <img src={post.image} alt={post.title} />
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
            {/*!response.loading && <button className="btn">Postar</button>*/}
            {/*response.loading && <button className="btn" disabled>Aguarde...</button>*/}
            {/*(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )*/}
          </form>
        </>
      )}
      
    </div>
  )
}

export default EditPost