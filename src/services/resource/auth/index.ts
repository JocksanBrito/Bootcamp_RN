import api from '~/services/api';
import {RequestSignInData, ResponseSignInData} from './types';

export const signResource = async ({
    email,
    password,
}: RequestSignInData): Promise<ResponseSignInData> => {
    const {data} = await api.post<ResponseSignInData>('/auth', {
        email,
        password,
    });
    return data;
};
