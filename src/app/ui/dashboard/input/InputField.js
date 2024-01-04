import { Field } from "formik"

const InputField = ({ id, type,name, placeholder, inputstyle }) => {
    return (
        <Field type={type} className={inputstyle} id={id} name={name} placeholder={placeholder} />
    )
}

export default InputField
