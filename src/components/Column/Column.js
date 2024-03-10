import './Column.scss';
import Task from '../task/task';
const Column=(props)=>{
  const {column}=props;
    return(
        <>
        <div className="column">
        <header>{column.title}</header>
        <ul className="task-list">
           <Task/>
        </ul>
        <footer>+ New</footer>
        </div>
        
        {/* <div className="column">
        <header>In progress</header>
        <ul className="task-list">
          <Task/>
        </ul>
        <footer>+ New</footer>
        </div>
        <div className="column">
        <header>Completed</header>
        <ul className="task-list">
          <Task/>
        </ul>
        <footer>+ New</footer>
        
        </div> */}
        </>
    )
}
export default Column;