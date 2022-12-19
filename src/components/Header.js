import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <h1><a href="/"><img src={logo} alt="creativityweb 로고" /></a></h1>
      <nav>
        <ul>
          <li><a href="/sub/project.php">PROJECT</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header