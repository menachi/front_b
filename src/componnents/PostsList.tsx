import { FC } from "react";
import ItemsList from "./ItemsList"
import usePosts from "../hooks/usePosts";

const PostsList: FC = () => {
    const { posts, isLoading, error } = usePosts()
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ItemsList title="Posts" items={posts.map((post) => post.title)} onItemSelected={(index) => { console.log("Selected " + index) }} />
        </div>
    )
}

export default PostsList