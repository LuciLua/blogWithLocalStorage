import { useState } from "react"
import styles from "./Posts.module.scss"

interface PropsPosts {
    children: string,
    title: string,
    author: string
}

function Posts({ children, title, author }: PropsPosts) {

    function removePost() {
        const local_posts = JSON.parse(localStorage.getItem('local_posts'))

        function filterPosts() {
            const findPostSametitle = local_posts.find(post => post.title === title)
            const filterPostsDifferentTitle = local_posts.filter(post => post !== findPostSametitle)

            return filterPostsDifferentTitle
        }

        localStorage.setItem("local_posts", JSON.stringify(filterPosts()))
        document.location.reload()
    }

    return (
        <div className={styles.posts}>
            <div className={styles.post}>
                <h1>{title}</h1>
                <h4>{author}</h4>
                <p>{children}</p>
                <div className={styles.actions}>
                    <button onClick={removePost}>X</button>
                </div>
            </div>
        </div>
    )
}


export default Posts