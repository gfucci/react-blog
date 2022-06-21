//css
import styles from './register.module.css'

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input 
            type="text" 
            name="displayName" 
            required 
            placeholder='Digite seu nome' 
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder='Digite seu e-mail' 
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type="password" 
            name="displayName" 
            required 
            placeholder='Digite uma senha' 
          />
        </label>
        <label>
          <span>Confirme sua senha:</span>
          <input 
            type="password" 
            name="displayName" 
            required 
            placeholder='Digite a senha novamente' 
          />
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Register