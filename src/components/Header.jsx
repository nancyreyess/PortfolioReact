export default function Header() {
  return (
    <header id="header">
      <h2 id="site-name"><a href="/">NR</a></h2>
      <nav className="nav">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}