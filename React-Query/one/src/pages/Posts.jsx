import {useQuery} from '@tanstack/react-query';
import {getPosts} from '../api/posts'
import {PostList} from "../components/PostList";

export function Posts(){
    const {
        status,
        error,
        data: posts
    } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    })

    if(status === "loading") return <h1>Loading...</h1>
    if(status === "error") return <h1>{JSON.stringify(error)}</h1>

    return(
        <React.Fragment>
            <h1>Posts</h1>
            <PostList posts={posts}/>
        </React.Fragment>
    )
}
