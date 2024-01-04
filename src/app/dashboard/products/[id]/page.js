"use client"
import styles from "@/app/ui/dashboard/product/viewProduct.module.css"
import DashboardButton from '@/app/ui/dashboard/button/Button';
import InputField from '@/app/ui/dashboard/input/InputField';
import { GiBoxUnpacking } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import SelectField from "@/app/ui/dashboard/select/Select";



const InputFieldData = [
    { id: "1", name: "name", type: "text", placeholder: "Product Name" },
    { id: "2", name: "price", type: "number", placeholder: "Price" },
    { id: "3", name: "stock", type: "number", placeholder: "Stock" },
    { id: "4", name: "description", type: "description", placeholder: "Description" },
]

const ViewProduct = () => {
    const { id } = useParams();
    const router = useRouter();
    const [productData, setProductData] = useState({ name: "", price: "", stock: "", description: "" })

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }

    const getSingleProductData = async (id) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/getSingleProductData/${id}`
            );
            setProductData(response.data.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const updateSingleProductData = async (id, updatedData) => {
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/updateSingleProductDataById/${id}`,
                updatedData
            );
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    useEffect(() => {
        getSingleProductData(id);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault()
        updateSingleProductData(id, productData)
        setProductData({ name: "", price: "", stock: "", description: "" });
        router.push("/dashboard/products")
    }

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <div className={styles.userImg}>
                    <GiBoxUnpacking size={80} />
                </div>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.main} onSubmit={handleSubmit}>
                    {InputFieldData.map((ele) =>
                        <div key={ele.id} className={styles.form}>
                            <InputField
                                {...ele}
                                inputstyle={styles.input}
                                value={productData[ele.name]}
                                onchange={handleChange} />
                        </div>
                    )}
                    <div className={styles.formbtn}>
                        <DashboardButton type={"submit"} value={"Update"} btnStyle={styles.btn} onclick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ViewProduct
