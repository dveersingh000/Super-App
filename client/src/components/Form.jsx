import React, { useState, useEffect, use } from 'react'
import styles from './Form.module.css'


const Form = ({
    name,
    setName,
    email,
    setEmail,
    username,
    setUsername,
    phone,
    setPhone,
    error,
    setError,
    submitHandler
}) => {

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            {error?.name && <span className={styles.error}>Name is required</span>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {error?.email && <span className={styles.error}>Valid email is required</span>}
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            {error?.username && <span className={styles.error}>Username is required</span>}
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            {error?.phone && <span className={styles.error}>Valid phone number is required</span>}
            <button onClick={submitHandler}>SIGN UP</button>
        </div>
    )
}

export default Form