import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
	return (
		<Layout>
			<h1>First Post 1</h1>
			<Link href='/'>Back to home</Link>
		</Layout>
	);
}
