import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import Students from "./Students";

const Reducer = (state="",action) =>{
    switch(action){
        case AddStudent : return<AddStudent/>
        case EditStudent:return <EditStudent/>
        default:return<Students/>
    }
}

export default Reducer;