import React, { useState } from 'react';
import styles from './RegisterPage.module.css';
import { AppContext } from '../context/AppContext.jsx';
import { useContext } from 'react';
import Form from '../components/Form.jsx';
import validateForm from '../utlis/validateForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const {user, setUser} = useContext(AppContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const submitHandler = () => {
        const { valid, inValid } = validateForm(name, email, username, phone);
        if (!valid) {
            setError({...inValid});
            // console.log("Form is invalid:", inValid);
            return;
        } 
        setError({});
        setUser({name, email, username, phone});
        navigate("/genres")
    }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.background}></div>
        <div className={styles.label}>Discover new things on Superapp</div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
            <h2 className={styles.heading}>Super app</h2>
            <h3 className={styles.subHeading}>Create your new account</h3>
        </div>
        <Form 
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            username={username}
            setUsername={setUsername}
            phone={phone}
            setPhone={setPhone}
            error={error}
            setError={setError}
            submitHandler={submitHandler}
        />
        <div className={styles.footer}>
            
            <p>By clicking on Sign up. you agree to Superapp 
                <span> Terms and Conditions of Use</span>
            </p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp 
                <span> Privacy Policy</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
