import styles from "./Actions.module.scss"

function Actions() {

    function removeAll() {
        localStorage.removeItem('local_posts')
        document.location.reload()
    }

    return (
        <div className={styles.actionsCollection}>
            <div className={styles.btnCollection}>
                <button onClick={removeAll}>Remove all</button>
            </div>
        </div>
    )
}


export default Actions