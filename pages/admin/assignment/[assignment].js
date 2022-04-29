import { useDocument } from "react-firebase-hooks/firestore";
import { doc, query, collection } from "firebase/firestore";

export default function Assignment(props) {
    

    return (
        <div className="h-screen p-6 ">
            <h1 className="text-3xl">{props.assignment} submissions</h1>
            <div className="flex flex-col items-center justify-start">
                
            </div>
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