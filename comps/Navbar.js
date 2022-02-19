import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <a><Image src="/ninjalist.png" width={58} height={67} /></a>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}
 
export default Navbar;