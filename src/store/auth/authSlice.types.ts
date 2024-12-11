import { INormalState } from '@/store/store.types.ts';
import { ILogin } from '@/store/auth/actions/login/login.types.ts';

export interface IAuthSlice {
  login: INormalState<ILogin>;
}
