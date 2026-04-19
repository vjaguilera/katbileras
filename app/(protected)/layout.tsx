import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import Layout from '@/components/Layout'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session) redirect('/login')

  return (
    <Layout user={{ username: session.username, name: session.name }}>
      {children}
    </Layout>
  )
}
