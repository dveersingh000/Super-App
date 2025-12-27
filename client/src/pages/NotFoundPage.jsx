import React from 'react';
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry the page you are looking for is not exists.</p>
        <Link to="/">Go to Homepage</Link>
    </div>
  )
}

export default NotFoundPage