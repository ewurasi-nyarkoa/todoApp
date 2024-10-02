import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = ()=>{
    return (
        <div>
 <h1 >todos goes here</h1>
 <div>
    <TodoTile title={ "Creating A React App"} />
    <TodoTile title={ "Install Tailwind Css"} />
    <TodoTile title={ "Commit code to GitHub"} />
    <TodoTile title={ "Host it on Netlify"} />
 </div>
   <Link to={'/add'}>Add Todo</Link>
        </div>
    );
}
export default Todos;