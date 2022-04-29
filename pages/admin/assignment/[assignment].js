export default function Assignment(props) {
    
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            {props.assignment}
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