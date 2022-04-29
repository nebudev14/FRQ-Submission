import { firestoreApp } from "../../../firebase";
import { useCollection } from 'react-firebase-hooks/firestore';

export default function Assignment(props) {
    const [value, loading, error] = useCollection(
        firestoreApp.collection('responses'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    console.log(value)
    
    return (
        <div className="h-screen p-6 ">
            <h1 className="text-3xl">{props.assignment} submissions</h1>
            <div className="flex flex-col items-center justify-start">
                {value && value.docs.map((doc, i) => (
                    <div key={i}>
                        <h1>{doc.data().email}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}