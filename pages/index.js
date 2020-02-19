import Link from 'next/link';


export default function Index() {
    return (
      <div>
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <p></p>
        <Link href="/process">
            <a>Our process</a>
        </Link>
        <p></p>
        <Link href="/connect">
            <a>Connect</a>
        </Link>
        <p>Hello Next.js</p>
      </div>
    );
}