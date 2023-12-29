"use client"
import styles from "@/app/ui/dashboard/user/viewUser.module.css"
import DashboardButton from '@/app/ui/dashboard/button/Button';
import InputField from '@/app/ui/dashboard/input/InputField';
import SelectField from '@/app/ui/dashboard/select/Select';
import { Form, Formik } from 'formik';



const InputFieldData = [
    { id: "1", name: "name", type: "text", placeholder: "Title" },
    { id: "2", name: "email", type: "email", placeholder: "Email" },
]

const View = () => {
    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    Role: '',
                    Action: '',
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
                        <SelectField name={"Role"} value={"Client"} value2={"Admin"} selectStyle={styles.select} />
                        <SelectField name={"Action"} value={"Active"} value2={"Passive"} selectStyle={styles.select} />
                    </div>
                    <div className={styles.formbtn}>
                        <DashboardButton type={"submit"} value={"Update"} btnStyle={styles.btn} />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default View
