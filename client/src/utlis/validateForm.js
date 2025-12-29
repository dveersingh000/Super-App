
const validateForm = (name, email, username, phone) => {
    let valid = true;
    let inValid = {
        name: false,
        email: false,
        username: false,
        phone: false
    }
    if(!name || name.trim().length === 0 || !email || !username || !phone) {
        valid = false;
        inValid = {
            name: !name,
            email: !email,
            username: !username,
            phone: !phone
        }
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if(!emailRegex.test(email) || !phoneRegex.test(phone)) {
        inValid = {
            ...inValid,
            email: !emailRegex.test(email),
            phone: !phoneRegex.test(phone)
        }
        valid = false;
        
    }
    console.log(valid);
    console.log(inValid);

    return { valid, inValid };
}

export default validateForm;