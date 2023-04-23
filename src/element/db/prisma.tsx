import { PrismaClient } from '@prisma/client'
export async function getStaticProps() {
    const prisma = new PrismaClient()
    const posts = await prisma.post.findMany()
    return {
        props : { posts}
    }
}

export default function Prisma({ posts }:any) {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
