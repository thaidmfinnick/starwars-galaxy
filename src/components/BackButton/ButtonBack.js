import {useHistory} from 'react-router-dom';

function BackButton({type}) {
    const history = useHistory();

    function Click() {
        if (type === 'people')
            history.push('/people');
        else if (type === 'planets')
            history.push('/planets');
        else if (type === 'ships')
            history.push('/ships');
    }
    
    return (
        <button type='button' onClick={Click}>Go back</button>
    )
}

export default BackButton;