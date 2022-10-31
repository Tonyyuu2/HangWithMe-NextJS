import Link from 'next/link';
import classes from './styling/navBar.module.css'

function NavBar() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>HangWithMe</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Hangouts</Link>
          </li>
          <li>
            <Link href='/new-hangout'>Add New Hangouts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;