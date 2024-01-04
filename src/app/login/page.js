"use client"
import styles from "@/app/ui/login/login.module.css"
import DashboardButton from "../ui/dashboard/button/Button";
import InputField from "../ui/dashboard/input/InputField";
import { useState } from "react";


const InputFieldData = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "Password", type: "Password", placeholder: "Password" },
]


const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", Password: "" })


    const handleChange = (e) => {
        setLoginData((prevData) => ({
            ...prevData, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData, "#############");
    }

    return (
        <div className={styles.container}>
            <form className={styles.main} onSubmit={handleSubmit}>
                <h2>Login</h2>
                {InputFieldData.map((ele) =>
                    <div key={ele.name} className={styles.form}>
                        <InputField inputstyle={styles.input} {...ele} onchange={handleChange} />
                    </div>
                )}
                <div className={styles.formbtn}>
                    <DashboardButton type={"submit"} value={"Login"} btnStyle={styles.btn} onclick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}
export default Login
