"use client"
import styles from "@/app/ui/signup/signup.module.css"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }


    const registerData = async (values) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/registerUser`, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Register success", { position: "top-center", theme: "colored", autoClose: 2000 })
        setTimeout(() => {
            router.push("/login")
        }, 2000);
        setUserInfo({ name: "", email: "", password: "" })
        registerData(userInfo)
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input type="text" placeholder="Enter Your Name" name="name" value={userInfo.name} onChange={handleChange} />
                <input type="text" placeholder="Enter Your Email" name="email" value={userInfo.email} onChange={handleChange} />
                <input type="password" placeholder="Enter Your Password" name="password" value={userInfo.password} onChange={handleChange} />
                <button className={styles.btn} onClick={handleSubmit}>Register</button>
                <div className={styles.login}>
                    {/* <p>I have account !</p>
                    <Link href={"/login"} className={styles.loginbtn}>Login</Link> */}
                    <p className={styles.loginbtn}>I have an account?
                        <Link href="/login" className="">Log in</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Signup
