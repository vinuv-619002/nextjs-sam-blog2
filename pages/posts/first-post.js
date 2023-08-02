import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from './../../components/layout';

function ImageComponent(){
    return <Image src="/images/profile.jpg" height="144" width="144" alt='profile pic'></Image>;
}

export default function FirstPost() {
    return (
        <>
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>Redirect back to <Link href="/">Home Page</Link></h1>
<br></br>
<ImageComponent></ImageComponent></Layout>
        </>
    );
}