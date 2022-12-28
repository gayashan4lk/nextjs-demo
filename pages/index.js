import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>I am a humble human being.</p>
				<p>This is a simple website that I'm building to learn Next.js.</p>
			</section>
		</Layout>
	);
}
