import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import './HeaderSection.css';
import EarthImage from './map.png';

function Header() {
  return (
    <>
      <div className="header">
        <p>Rest Countries</p>
        <div className="header-icons">
          <FaMicrophone style={{ fill: '#fff' }} />
          <AiFillSetting style={{ fill: '#fff' }} />
        </div>

      </div>
      <div className="headline">
        <img className="earth-logo" src={EarthImage} alt="Earth" />
        <div className="headline-description">
          <h1>Rest Countries</h1>
          <p>You can find information about all countries in the world</p>
        </div>
      </div>
    </>
  );
}

export default Header;
