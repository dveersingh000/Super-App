import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry the page you are looking for is not exists.</p>
    </div>
  )
}

export default NotFoundPage