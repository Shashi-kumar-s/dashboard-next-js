"use client"
import styles from "@/app/ui/dashboard/user/addUser.module.css"
import DashboardButton from '@/app/ui/dashboard/button/Button';
import InputField from '@/app/ui/dashboard/input/InputField';
import axios from "axios";
import { useState } from "react";
import SelectField from "@/app/ui/dashboard/select/Select";
import { redirect, useRouter } from "next/navigation";

const InputFieldData = [
    { id: "1", name: "name", type: "text", placeholder: "Title" },
    { id: "2", name: "email", type: "email", placeholder: "Email" },
]
const options = [
    { id: "1", value: "true", label: "Yes" },
    { id: "2", value: "false", label: "No" },
];



const AddUser = () => {
    const router = useRouter()
    const [userData, setUserData] = useState({ name: "", email: "", IsAdmin: "select", IsActive: "select" })

    const fetchData = async (values) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/addUser`, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };



    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: type === 'checkbox' ? e.target.checked : value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(userData);
        setUserData({ name: "", email: "", IsAdmin: "", IsActive: "" });
        router.push("/dashboard/users")
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.main}>
                    {InputFieldData.map((ele) =>
                        <div key={ele.id} className={styles.form}>
                            <InputField
                                {...ele}
                                inputstyle={styles.input}
                                value={userData[ele.name]}
                                onchange={handleChange} />
                        </div>
                    )}
                    <div className={styles.selectContainer}>
                        {["IsAdmin", "IsActive"].map((name) =>
                            <SelectField
                                key={name}
                                name={name}
                                options={options}
                                selectStyle={styles.select}
                                onchange={handleChange}
                                selectedValue={userData[name]}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.formbtn}>
                    <DashboardButton type={"submit"} value={"Submit"} btnStyle={styles.btn} onclick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default AddUser;
