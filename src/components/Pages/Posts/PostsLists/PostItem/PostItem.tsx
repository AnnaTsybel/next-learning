
import styles from '../../../../../../styles/Home.module.scss'
import Link from "next/link";
function PostItem({post:post,index:number}) {
    return(
        <li className={styles.postItem}>
            <h3>Post</h3>
            <Link href={`posts/post/${post.id}`}>&#8594;</Link>
            <p>{post.author}</p>
            <p>title</p>
        </li>
    )
}

export default PostItem;