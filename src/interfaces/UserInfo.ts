import { UserAddress } from './UserAddress';

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface UserInfo {
  id?: number;
  name: string;
  email: string;
  password: string;
  cpfCnpj: string;
  birth: string;
  phoneNumber: string;
  address: UserAddress;
}