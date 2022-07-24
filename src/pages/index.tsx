import { useEffect } from "react"
import { useState } from "react"
import Actions from "../components/Actions/Actions"
import Posts from "../components/Posts/Posts"
import WritePost from "../components/WritePost/WritePost"
import styles from "../styles/home.module.scss"

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])


    function getPosts() {
        const local_posts = localStorage.getItem('local_posts')
        if (local_posts) {
            setPosts(JSON.parse(local_posts))
        } else {
            setPosts([])
        }
    }


    const showPosts = () => {
        return (
            posts.map(post => {
                return (
                    <Posts key={post.title} title={post.title} author={post.author}>
                        {post.content}
                    </Posts>
                )
            })
        )
    }

    return (
        <div className={styles.wrapContainer}>
            <h1>📖 Blog</h1>
            <WritePost />
            <Actions />
            {showPosts()}
        </div>
    )
}


export default Home