"use client"
import DashboardButton from "@/app/ui/dashboard/button/Button";
import InputField from "@/app/ui/dashboard/input/InputField";
import styles from "@/app/ui/dashboard/product/addProduct.module.css"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const InputFieldData = [
    { name: "name", type: "text", placeholder: "Product Name" },
    { name: "price", type: "number", placeholder: "Price" },
    { name: "stock", type: "number", placeholder: "Stock" },
    { name: "description", type: "text", placeholder: "Description" },
]

const AddProduct = () => {
    const router = useRouter()
    const [productData, setProductData] = useState({ name: "", price: "", stock: "", description: "" })

    const handleChange = (e) => {
        setProductData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    const fetchData = async (values) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/addProduct`, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleSubmit = (e) => {
        console.log(productData);
        e.preventDefault();
        fetchData(productData);
        router.push("/dashboard/products")
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.main}>
                    {InputFieldData.map((ele) =>
                        <div key={ele.name} className={styles.form}>
                            <InputField inputstyle={styles.input} {...ele} value={productData[ele.name]} onchange={handleChange} />
                        </div>
                    )}
                </div>
                <div className={styles.formbtn}>
                    <DashboardButton type={"submit"} value={"Submit"} btnStyle={styles.btn} onclick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default AddProduct
