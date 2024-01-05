
const InputField = ({ inputstyle, onchange, ...ele }) => {
    return (
        <input className={inputstyle} onChange={onchange} {...ele} />
    )
}

export default InputField
