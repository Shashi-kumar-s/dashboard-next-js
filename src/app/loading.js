import styles from "@/app/ui/dashboard/loader/loading.module.css"


const Loading = () => {
    return (
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
    )
}

export default Loading
