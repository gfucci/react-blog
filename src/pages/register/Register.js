//css
import styles from './register.module.css'

import { useState } from 'react'

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    console.log(user)
  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
            type="text" 
            name="displayName" 
            required 
            placeholder='Digite seu nome'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)} 
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder='Digite seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type="password" 
            name="displayName" 
            required 
            placeholder='Digite uma senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme sua senha:</span>
          <input 
            type="password" 
            name="displayName" 
            required 
            placeholder='Digite a senha novamente'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </label>
        <button className='btn'>Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register