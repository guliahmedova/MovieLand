import { Link } from 'react-router-dom';
import profilePic from '../images/profile.png';

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo">MovieLand</div>
      </Link>
      <div className="user-image">
        <img src={profilePic} alt="user" />
      </div>
    </div>
  )
}

export default Header