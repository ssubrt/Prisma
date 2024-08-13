import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){
    await prisma.post.create({
        data:{
            title:"Title of Post",
            published:true,
            author:{
                connect:{
                    id:1 // assuming author id is 1
                }
            }
        }
    })
}

main()