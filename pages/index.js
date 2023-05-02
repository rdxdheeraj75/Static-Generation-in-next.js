import Link from "next/link";
export default function Home({posts}) {
  // console.log(posts);
  return (
    <div>
      <h1>Blog posts</h1>
      <ul>
        {
          posts.map((post)=>{
            return <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  // console.log(posts);
  return {
    props: {posts: posts.slice(0,20)}
  }
}