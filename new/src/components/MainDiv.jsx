import { Outlet } from 'react-router-dom';
import styles from './MainDiv.module.css';
import Sidebar from './common/Sidebar';
import { useState } from 'react';

const MainDiv = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.outer}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.inner} style={{ width: isOpen ? '85%' : '95%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainDiv;
