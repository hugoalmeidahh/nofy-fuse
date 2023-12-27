import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const admin = await prisma.user.create({
    data: {
      name: 'Nimda',
      email: 'nimda@nofy.fuse',
      password_hash: '1234567890',
      role: 'ADMIN',
    },
  })

  const user = await prisma.user.create({
    data: {
      name: 'Resu',
      email: 'resu@nofy.fuse',
      password_hash: '1234567890',
    },
  })

  console.log({ admin, user })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
