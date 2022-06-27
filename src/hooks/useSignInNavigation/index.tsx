import {useNavigation} from '@react-navigation/native';

const useSignInNavigation = () => {
    const navigation = useNavigation<SignInStackNavigatorProp>();
    return navigation;
};

export default useSignInNavigation;
