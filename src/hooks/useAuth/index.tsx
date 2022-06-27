import {useContext} from 'react';
import {AuthContext} from '~/context/Auth';

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('UseAuth must be used within an AuthProvider. ');
    }
    return context;
};

export default useAuth;
