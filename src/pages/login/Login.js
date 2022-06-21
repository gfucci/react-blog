//CSS
import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <h1>Faça o login</h1>
      <form>
        <label>
          <span>Login:</span>
          <input 
            type="text" 
            name="login" 
            required 
            placeholder='Digite seu nome de usuário'
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type="password" 
            name="senhaLogin" 
            required 
            placeholder='Digite ssua senha'
          />
        </label>
        <input type="submit" value="Entrar" />
      </form>
    </div>
  )
}

export default Login