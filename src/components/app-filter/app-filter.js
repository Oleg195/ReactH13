import "./app-filter.css";

const AppFilter = (props) => {
    const buttonData=[
        {name:'all', label:'Все группы'},
        {name:'rise', label:'Высокая успеваемость'},
        {name:'moreThen1000', label:'У/п больше 25'},
    ];

    const buttons=buttonData.map(({name,label})=>{
        
        const active = props.filter===name;
        const classCss = active ? 'btn btn-light': "btn btn-outline-light";

        return(
            <button type="button"
                    className={classCss}
                    onClick={()=>props.onFilterSelect(name)}
                    key={name}>
                   {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
           {buttons}
        </div>
    )

    
}

export default AppFilter;