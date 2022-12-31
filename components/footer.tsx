import Link from "next/link";

const items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Introduce",
    link: "/introduce",
  },
  {
    name: "Privacy policy",
    link: "/privacy-policy",
  },
  {
    name: "Contact",
    link: "/contact",
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__items">
        {items.map((item) => (
          <Link href={item.link} key={item.name} className="footer__item">
            {item.name}
          </Link>
        ))}
      </div>
      <p className="footer__small">
        <small>&copy; 2023 tuna2134</small>
      </p>
    </footer>
  );
}
