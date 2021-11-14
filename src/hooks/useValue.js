
import { useContext } from 'react';
import { AuthContext } from './../contexts/AuthProvider/AuthProvider';

const useValue = () => {
    return (
    useContext(AuthContext)
    );
};

export default useValue;