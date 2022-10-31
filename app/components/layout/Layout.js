import NavBar from './NavBar';
import classes from './layout.module.css';

function Layout(props) {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;