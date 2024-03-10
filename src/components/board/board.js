import React from 'react';
import './board.scss';
import Column from '../Column/Column';
import {Data} from '../../actions/data';
import {useState,useEffect} from 'react';
import _ from 'lodash';
import {Container,Draggable} from 'react-smooth-dnd';

const BoardContent = () => {
  const [board,setBoard]=useState({});
  const [columns,setColumns]=useState([]);

  useEffect(()=>{
    const boardData=Data.boards.find(item=>item.id==='board-1');
    if(boardData)
    {
      setBoard(boardData);

      setColumns(boardData.columns);
    }
  },[]);

  onColumnDrop=(dropResult)=>{
    console.log(">>> inside onColumnDrop",dropResult)
  }
  if(_.isEmpty(board))
  {
    return(
      <>
      <div className="not-found">Board not found</div>
      </>
    )
  }
    return (
      <>
      
       <div className="board-columns">
        <Container orientation="horizontal" onDrop={this.onColumnDrop} 
         dragHandleSelector=".column-drag-handle" dropPlaceholder={{
          animationDuration:150,
          showOnTop:true,
          className:'cards-drop-preview'}}>
        {columns && columns.length > 0 && columns.map((column,index)=>{
          return(
            <Column 
               key={column.id}
               column={column}
               />
          )
        
        })}
    </Container>
        
        </div>
        </>
    );
  }
  export default BoardContent;
