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
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__items">
        {items.map((item) => (
          <Link href={item.link} key={item.name}>
            <a className="footer__item">{item.name}</a>
          </Link>
        ))}
      </div>
      <p className="footer__small">
        <small>&copy; tuna2134 2022</small>
      </p>
    </footer>
  );
}
