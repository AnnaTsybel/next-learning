
import styles from '../../../../styles/Home.module.scss';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { getPosts } from '../../storeOn/storeon';
import PostList from './PostsLists/PostList';
export default function Posts() {
    const { dispatch } = useStoreon();
    const {posts}=useStoreon('posts');
    useEffect(() => {
        
        getPosts().then((res => {
            dispatch("setInitPost", res);
            console.log(posts)
        }))
    }, []);
  return (
    <div className={styles.tasks}>
      <h2 className="title">Posts</h2>
      <PostList/>
    </div>
  );
}