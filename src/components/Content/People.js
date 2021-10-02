import { useFetch } from '../../hooks/useFetch';

const People = () => {
    const { state }  = useFetch();
    console.log(state);
    // const test = state.name;
    // console.log(test);
    return (
        <>
            <h1>We are people</h1>
        </>
    )
}

export default People;
