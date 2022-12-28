import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({ children, title }) {
	return (
		<div className={styles.container}>
			<header>
				<nav>
					<Link href='/'>Home</Link> | <a href=''>Products</a>{' '}
				</nav>
				<h5>{title}</h5>
				<hr />
			</header>
			<main>{children}</main>
			<footer>
				<hr />
				<Link href='/'>Back to home</Link>
				<h5>Copyright @ 2023</h5>
			</footer>
		</div>
	);
}
