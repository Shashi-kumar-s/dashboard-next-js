"use client"
import styles from "@/app/ui/dashboard/user/viewUser.module.css"
import DashboardButton from '@/app/ui/dashboard/button/Button';
import InputField from '@/app/ui/dashboard/input/InputField';
import { FaUserTie } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import SelectField from "@/app/ui/dashboard/select/Select";



const InputFieldData = [
    { id: "1", name: "name", type: "text", placeholder: "Title" },
    { id: "2", name: "email", type: "email", placeholder: "Email" },
]

const options = [
    { id: "1", value: "true", label: "Yes" },
    { id: "2", value: "false", label: "No" },
];


const View = () => {
    const { id } = useParams();
    const router = useRouter();
    const [userData, setUserData] = useState({ name: "", email: "", IsAdmin: "", IsActive: "" })



    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const getSingleUserData = async (id) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/getSingleUserById/${id}`
            );
            setUserData(response.data.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const updateSingleUserData = async (id, updatedData) => {
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/updateSingleUserDataById/${id}`,
                updatedData
            );
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };


    useEffect(() => {
        getSingleUserData(id);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault()
        updateSingleUserData(id, userData)
        setUserData({ name: "", email: "", IsAdmin: "", IsActive: "" });
        router.push("/dashboard/users")
    }


    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <div className={styles.userImg}>
                    <FaUserTie size={80} />
                </div>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.main} onSubmit={handleSubmit}>
                    {InputFieldData.map((ele) =>
                        <div key={ele.id} className={styles.form}>
                            <InputField
                                {...ele}
                                inputstyle={styles.input}
                                value={userData[ele.name]}
                                onchange={handleChange} />
                        </div>
                    )}
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
                    <div className={styles.formbtn}>
                        <DashboardButton type={"submit"} value={"Update"} btnStyle={styles.btn} onclick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default View
