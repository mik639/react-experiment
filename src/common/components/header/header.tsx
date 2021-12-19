import "./header.css";

const LINKS = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6"];

export function Header() {
  return (
    <header className="header">
      {LINKS.map((link) => (
        <a href="#" key={link}>
          {link}
        </a>
      ))}
    </header>
  );
}
