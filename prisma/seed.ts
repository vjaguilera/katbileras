import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: await bcrypt.hash('katbileras2024', 12),
      name: 'Administrador',
      role: 'admin',
    },
  })

  await prisma.user.upsert({
    where: { username: 'familia' },
    update: {},
    create: {
      username: 'familia',
      password: await bcrypt.hash('familia123', 12),
      name: 'Familia Katbileras',
      role: 'member',
    },
  })

  await prisma.user.upsert({
    where: { username: 'vicente' },
    update: {},
    create: {
      username: 'vicente',
      password: await bcrypt.hash('Duende23', 12),
      name: 'Vicente',
      role: 'member',
    },
  })

  await prisma.user.upsert({
    where: { username: 'jinan' },
    update: {},
    create: {
      username: 'jinan',
      password: await bcrypt.hash('Paraiso1101', 12),
      name: 'Jinan',
      role: 'member',
    },
  })

  console.log('Seed completado')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
