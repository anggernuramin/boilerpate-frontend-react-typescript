import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'
import MiddlewareNotAuth from '../../hoc/MiddlewareNotAuth'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleLogin = () => {
    const result = authService.login(username, password)
    if (result) {
      if (result.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } else {
      setError('Username atau password salah!')
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default MiddlewareNotAuth(LoginPage)
