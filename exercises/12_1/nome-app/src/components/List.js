import React from 'react';

const taskList = ['Tarefa 01', 'Tarefa 02', 'Tarefa 03','Tarefa 04','Tarefa 05'];

const list = taskList.map((element)=>{ 
    return <li>{element}</li>; 
});

function List () {   
    return (
        <ol>
        {list}
        </ol>
        )
}

 


 export default List;