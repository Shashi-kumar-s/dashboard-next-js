"use client"
import styles from "@/app/ui/login/login.module.css"
import { useState } from "react"

const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    function generateRandomNumber() {
        const minDigits = 10;
        const token = Math.floor(Math.random() * (Math.pow(10, minDigits) - Math.pow(10, minDigits - 1)) + Math.pow(10, minDigits - 1));
        return token;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInfo.email === "user123@gmail.com" && userInfo.password === "user123") {
            const token = generateRandomNumber();
            localStorage.setItem("token", JSON.stringify(token))
        }
        setUserInfo({ email: "", password: "" })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="text" placeholder="Enter Your Email" name="email" value={userInfo.email} onChange={handleChange} />
                <input type="password" placeholder="Enter Your Password" name="password" value={userInfo.password} onChange={handleChange} />
                <button className={styles.btn} onClick={handleSubmit}>Login</button>
                <div className={styles.signup}>
                    <p>I haven't account !</p>
                    <button className={styles.signupbtn}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Login
