import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <h1>Bookstore CMS</h1>
        <ul className={styles.navBar__ul}>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link className={styles['navBar__ul--category']} to="categories">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.socialIcon}>
        <i className="fa-solid fa-user-large" />
      </div>
    </header>
  );
}
export default Navbar;
