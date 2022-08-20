
import { Logo } from '@/presentation/components'
import { Link } from "react-router-dom";
import './header-styles.scss'
import { Container } from '@mui/material'

const Header: React.FC = () => {
  return (
    <header className="headerWrap">
      <Container maxWidth="lg">
        <div className="headerContent">
          <Link to="/">
            <Logo />
          </Link>
          <div>

          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;