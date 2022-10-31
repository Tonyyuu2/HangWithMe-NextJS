import Link from 'next/link';
import classes from './mainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>HangWithMe</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Hangouts</Link>
          </li>
          <li>
            <Link to='/new-hangout'>Add New Hangouts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;