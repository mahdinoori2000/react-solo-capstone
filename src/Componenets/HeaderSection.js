import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import './HeaderSection.css';

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
      <div className="headline" />
      <h1>Rest Countries</h1>
    </>
  );
}

export default Header;
