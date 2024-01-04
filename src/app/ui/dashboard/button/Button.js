const DashboardButton = ({ value, type, btnStyle, onclick }) => {
    return (
        <button type={type} className={btnStyle} onClick={onclick}>{value}</button>
    )
}
export default DashboardButton
