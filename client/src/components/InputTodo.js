import React, {useState} from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSumbitForm = async (e) => {
        e.preventDefault(); //stops from loading new page
        try{
            const body = {description};
            const response = await fetch('http://localhost:5000/todos',{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            window.location = '/';
        }catch(err){
            console.log(err);
        }
    }
    return <>
    <h1 className="text-center mt-5"> PERN stack todoList </h1>
    <form className='d-flex mt-5 flex-row' onSubmit={onSumbitForm}>
        <input type="text" className="form-control" value={description} 
        onChange={(e) => setDescription(e.target.value)}/>
        <button className="btn btn-success">Add</button>
    </form>
  </>
}

export default InputTodo