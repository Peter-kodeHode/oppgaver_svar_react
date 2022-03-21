export const ProjectPageProps = (props) => {
    const {headProp, paraProp1, paraProp2} = props;
    return(
        <>
        <h1>{headProp}</h1>
        <p>{paraProp1}</p>
        <p>{paraProp2}</p>
        </>
    );
};