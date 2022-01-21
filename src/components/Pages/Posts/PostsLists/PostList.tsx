import PostItem from "./PostItem/PostItem";
import { useStoreon } from "storeon/react";
import styles from '../../../../../styles/Home.module.scss'
import {posts as post} from '../../../intefaces/posts'

function PostsList() {

  
const {posts}=useStoreon('posts');
  if (posts.length > 0) {
    return (
      <ul className={styles.postLists}>
        {posts.map((post:post, index:number) => {
          return <PostItem post={post} index={index} key={post.id} />;
        })}
      </ul>
    );
  }
 
  return <h2 className="title">No tasks to display</h2>;
}

export default PostsList;