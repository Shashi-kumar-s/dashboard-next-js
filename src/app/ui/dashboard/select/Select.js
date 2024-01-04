import styles from "@/app/ui/dashboard/select/select.module.css"
import { Field } from "formik"

const SelectField = ({ name, value, value2, selectStyle }) => {
    return (
        <div className={styles.container}>
            <Field as="select" name={name} className={selectStyle}>
                <option>- - Select - -</option>
                <option value={value}>{value}</option>
                <option value={value2}>{value2}</option>
            </Field>
        </div>
    )
}

export default SelectField
