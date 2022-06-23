//css
import styles from './register.module.css'

import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
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

    const res = await createUser(user)

    console.log(res)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

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
        {loading ? (
          <button className='btn' disabled>Aguarde...</button>
        ) : (
          <button className='btn'>Cadastrar</button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register