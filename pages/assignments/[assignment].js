import { useCollection } from 'react-firebase-hooks/firestore';
import { firestoreApp } from "../../firebase";

export default function Assignment(props) {
    const assignmentName = props.assignment;
    
    const [assignments, assignmentsLoading, assignmentsError] = useCollection(
        firestoreApp.collection(assignmentName),
        {}
    );
    
    if(!assignmentsLoading && assignments) {
        assignments.docs.map((doc) => console.log(doc.data()))
    } else {
        console.log(assignmentsError)
    }
    
    return (
        <div className="flex items-center justify-center h-screen ">
            {/* !assignmentsLoading ? assignments.docs.map((doc) => doc.data.name) : null */}
        </div>
    );
}

export const getServerSideProps = async context => {
    const {assignment} = context.params;
    return {
        props: {
            assignment
        }
    }
}