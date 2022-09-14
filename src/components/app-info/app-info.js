import "./app-info.css";

const AppInfo = ({inc,emp}) => {
    return (
        <div className="app-info">
            <h1>Учет Групп на занятиях</h1>
            <h2>Общее число групп: {emp}</h2>
            <h2>Высокая успеваемость: {inc}</h2>
        </div>
    )
}
export default AppInfo;