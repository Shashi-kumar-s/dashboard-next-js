import { Field } from "formik"

const InputField = ({ id, name, placeholder }) => {
    return (
        <Field id={id} name={name} placeholder={placeholder} />
    )
}

export default InputField
