import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Main from "./Main";


const NoteDetails = () =>{
    const {id} = useParams();

    return(
        <div>
       <Layout />
        </div>

    );





}
export default NoteDetails;