import { useNavigate } from "react-router-dom";

const AddTodos = ()=>{
    const navigate = useNavigate();

    const saveTodo = (event) =>{
        event.preventDefault();
        //post data to todo api
        //go to the home page
        navigate('/');
    }


    return (
        <div>
<h1> Add A New todos</h1>
<form onSubmit={saveTodo}>
    <input type="text"  placeholder="Enter Your Task" className="w-[300px] h-[30px]  rounded-full " required/>
    <button type="submit" className="bg-cyan-500 w-[150px] rounded-full h-[30px]">Submit</button>
</form>
        </div>
    );
}
export default AddTodos;