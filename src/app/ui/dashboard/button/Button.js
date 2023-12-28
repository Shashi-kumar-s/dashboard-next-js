const DashboardButton = ({ value,type, btnStyle,icon }) => {
    return (
        <button type={type} className={btnStyle}>{value}</button>
    )
}
export default DashboardButton
