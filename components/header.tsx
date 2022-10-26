import Image from 'next/image'
import Link from 'next/link'


const nav_items = [
    {
        name: 'Introduce',
        href: '/introduce',
    }
]

export default function Header() {
    return (
        <header className="header">
            <div className="header__brand">
                <Image className='header__brand-logo' src="/logo.webp" alt="logo" width={64} height={64} />
                <h1 className='header__brand-title'>
                    <Link href="/">fdc notes</Link>
                </h1>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {nav_items.map((item) => (
                        <li className="header__nav-items" key={item.name}>
                            <Link className="header__nav-item" href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
