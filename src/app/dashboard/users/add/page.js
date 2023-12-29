"use client"
import styles from "@/app/ui/dashboard/user/addUser.module.css"
import DashboardButton from '@/app/ui/dashboard/button/Button';
import InputField from '@/app/ui/dashboard/input/InputField';
import { Formik, Form } from 'formik';
import SelectField from "@/app/ui/dashboard/select/Select";

const InputFieldData = [
    { name: "name", type: "text", placeholder: "Title" },
    { name: "email", type: "email", placeholder: "Email" },
    // { name: "price", type: "number", placeholder: "Price" },
    // { name: "stock", type: "number", placeholder: "Stock" },
]

const AddUser = () => {
    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    Role: '',
                    Action: '',
                    date: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <div className={styles.main}>
                        {InputFieldData.map((ele) =>
                            <div key={ele.id} className={styles.form}>
                                <InputField type={ele.type} inputstyle={styles.input} id={ele.id} name={ele.name} placeholder={ele.placeholder} />
                            </div>
                        )}
                        <SelectField name={"Role"} value={"Client"} value2={"Admin"} selectStyle={styles.select}/>
                        <SelectField name={"Action"} value={"Active"} value2={"Passive"} selectStyle={styles.select}/>
                    </div>
                    <div className={styles.formbtn}>
                        <DashboardButton type={"submit"} value={"Submit"} btnStyle={styles.btn} />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AddUser
