import {useQuery, useMutation} from "@tanstack/react-query";

const POSTS = [
  {id:1, title: "Post 1"},
  {id:2, title: "Post 2"}
]

const App = () =>{
 const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(()=>[...POSTS])
  })

if(postsQuery.isLoading) return <h1>Loading...</h1>
if(postsQuery.isError) {
  return <pre>{JSON.stringify(postsQuery.error)}</pre>
}


return (
  <>
    <div>
      {postsQuery.data.map(post =>{
        return <div key={post.id}>
          {post.title}
        </div>
      })}
    </div>
  </>)
}


const wait = (duration) => {
  return new Promise(resolve => setTimeout(resolve, duration))
}





export default App;