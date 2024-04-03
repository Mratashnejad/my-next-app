import Link from 'next/link'

export default function homePage(){
    return(
        <div>
            <h2> home page</h2>
            <ul>
                <li><Link href="/blog/posts">Blog Posts</Link></li>
                <li><Link href="/users/">users</Link></li>
            </ul>
        </div>
    ) 
}