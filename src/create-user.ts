import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log: ['info','query']})

async function main() {
  // NOTE:... you will write your Prisma Client queries here
await prisma.user.create({
    data: {
        email: "maddy@gmail.com",
        name: "madhav"
    }
})


}

main()