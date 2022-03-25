// TOOLS
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// SELECTORS
import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";

export default function UserPage() {
  const userId = useParams().id;

  const user = useSelector(state => selectUserById(state, userId));

  const postsForUser = useSelector(state => selectPostsByUser(state, userId));

  const postTitles = postsForUser.map(post => (
    <li key={ post.id }>
      <Link to={ `/posts/${post.id}` }>{ post.title }</Link>
    </li>
  ));

  return (
    <section>
      <h2>{ user.name }</h2>
      <ul>{ postTitles }</ul>
    </section>
  );
}