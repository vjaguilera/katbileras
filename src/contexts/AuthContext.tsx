import { createContext, useContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

interface User {
  username: string
  name: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

const USERS: Record<string, { password: string; name: string }> = {
  admin: { password: 'katbileras2024', name: 'Administrador' },
  familia: { password: 'familia123', name: 'Familia Katbileras' },
}

const SESSION_KEY = 'katbileras_user'

const AuthContext = createContext<AuthContextType | null>(null)

function loadSession(): User | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    return raw ? (JSON.parse(raw) as User) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(loadSession)

  const login = useCallback((username: string, password: string): boolean => {
    const record = USERS[username.toLowerCase()]
    if (!record || record.password !== password) return false
    const u: User = { username: username.toLowerCase(), name: record.name }
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(u))
    setUser(u)
    return true
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY)
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user !== null }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
