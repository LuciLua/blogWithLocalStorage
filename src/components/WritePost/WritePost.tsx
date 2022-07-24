import { useState } from "react"
import styles from "./WritePost.module.scss"

function WritePost() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')

    function sendPost(e: any) {

        // e.preventDefault()

        const local_posts = JSON.parse(localStorage.getItem('local_posts'))
        const post = { title: title, author: author, content: content }

        if (local_posts == null) {
            var postsAndPostToLocal = JSON.stringify([post])
        } else {
            var postsAndPostToLocal = JSON.stringify([...local_posts, post])
        }
        localStorage.setItem('local_posts', postsAndPostToLocal)
    }

    function setPostParams(e: any) {
        if (e.target.id == "title") {
            setTitle(e.target.value)
        }
        if (e.target.id == "author") {
            setAuthor(e.target.value)
        }
        if (e.target.id == "content") {
            setContent(e.target.value)
        }
    }

    return (
        <form className={styles.writeBox}>
            <div className={styles.content}>

                <label>
                    <span>Title Post</span>
                    <input type="text" id="title" onInput={(e) => setPostParams(e)} />
                </label>
                <label>
                    <span>Author</span>
                    <input type="text" id="author" onInput={(e) => setPostParams(e)} />
                </label>
                <label className={styles.content}>
                    <span>Content</span>
                    <textarea id="content" onInput={(e) => setPostParams(e)} />
                </label>
                <div className={styles.btnCollection}>
                    <button type="submit" onClick={sendPost}>Send</button>
                    <button type="reset">Reset</button>
                </div>
            </div>
        </form>
    )
}


export default WritePost