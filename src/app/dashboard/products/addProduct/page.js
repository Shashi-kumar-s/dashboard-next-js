"use client"
import DashboardButton from "@/app/ui/dashboard/button/Button";
import InputField from "@/app/ui/dashboard/input/InputField";
import styles from "@/app/ui/dashboard/product/addProduct.module.css"
import { Formik, Form } from 'formik';

const InputFieldData = [
    { name: "name", type: "text", placeholder: "Title" },
    { name: "description", type: "text", placeholder: "Description" },
    { name: "price", type: "number", placeholder: "Price" },
    { name: "stock", type: "number", placeholder: "Stock" },
]

const AddProduct = () => {
    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    price: '',
                    stock: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    {InputFieldData.map((ele) =>
                        <div key={ele.id} className={styles.form}>
                            <InputField id={ele.id} name={ele.name} placeholder={ele.placeholder} />
                        </div>
                    )}
                    <DashboardButton type={"submit"} value={"Submit"} />
                </Form>
            </Formik>
        </div>
    )
}

export default AddProduct
