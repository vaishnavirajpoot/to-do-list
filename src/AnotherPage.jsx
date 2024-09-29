// src/AnotherPage.jsx

import { useState } from 'react';

const AnotherPage = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask, setmainTask] = useState([]);

    const submitHandlers =(e)=>{
        e.preventDefault();
      setmainTask([...mainTask,{ title,desc }]);
console.log(mainTask);
        settitle("");
        setdesc("")
    }

  
const deleteHandler = (i)=>{
let copyTask = [...mainTask];
copyTask.splice(i, 1);
        setmainTask(copyTask);
}

    let render = <h5 id='no-task'>no task yet....</h5>
    
    if(mainTask.length > 0){
        render  = mainTask.map((t,i)=>{
            return <div key={i} id='rendertask'>
                <h5>  {t.title}</h5>
                <h6>  {t.desc}</h6>
                <button onClick={()=>{
                    deleteHandler(i)
                }}>delete</button>
            </div>
        })
    }
    return (

      <div id="Another">
        <h3>to Do List..</h3>

        <form onSubmit={submitHandlers} id="sec">
            <input type="text" placeholder="title" value={title} onChange={(e)=>settitle(e.target.value)} />
            <input type="text" placeholder="description" value={desc} onChange={(e) => setdesc(e.target.value)} />
            <input id="create" type="submit" value="create"/>
        </form>

<ul>
    <div id='showTask'>
       
           {render}
        
    </div>
</ul>

      </div>
    );
  };
  
  export default AnotherPage;
  