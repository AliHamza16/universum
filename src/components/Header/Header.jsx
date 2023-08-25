import React from 'react';
import { setGlobalState } from '../../../state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
export default function Header() {
  return (
    <div className={styles.navbar}>
      <span id={styles['company-name']}>Universum</span>
      <div className={styles['search-box']}>
        <FontAwesomeIcon
          color="rgb(198, 198, 198)"
          size="1x"
          icon={faSearch}
          id={styles['search-icon']}
        ></FontAwesomeIcon>
        <input
          placeholder="Ara"
          type="search"
          name="search"
          id={styles['search-input']}
          onChange={(e) => {
            setGlobalState('search', e.target.value);
          }}
        />
      </div>
    </div>
  );
}
