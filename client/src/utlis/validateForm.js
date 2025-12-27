
const validateForm = (name, email, username, phone) => {
    console.log({name, email, username, phone});
    if (!name || !email || !username || !phone) {
        console.log("All fields are required.");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if(!emailRegex.test(email) && !phoneRegex.test(phone)) {
        console.log("Invalid email and phone number.");
        return false;
    }
}

export default validateForm;