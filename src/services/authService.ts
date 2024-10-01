// Definisikan tipe untuk pengguna
interface User {
  username: string
  password: string
  role: 'admin' | 'client' // Role hanya bisa admin atau client
}

// Simulasi hardcoded data user
const USERS: User[] = [
  {
    username: 'admin',
    password: 'admin123',
    role: 'admin'
  },
  {
    username: 'client',
    password: 'client123',
    role: 'client'
  }
]

// Simulasi login function
const login = (username: string, password: string): { token: string; role: string } | null => {
  const user = USERS.find((u) => u.username === username && u.password === password)
  if (user) {
    // Simpan token dan role ke localStorage
    localStorage.setItem('accessToken', 'fake-jwt-token')
    localStorage.setItem('role', user.role)
    return { token: 'fake-jwt-token', role: user.role }
  }
  return null // Login gagal
}

// Simulasi logout
const logout = (): void => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('role')
}

// Simulasi cek apakah user sudah login
const getAccessToken = (): string | null => localStorage.getItem('accessToken')
const getRole = (): string | null => localStorage.getItem('role')

export default {
  login,
  logout,
  getAccessToken,
  getRole
}
