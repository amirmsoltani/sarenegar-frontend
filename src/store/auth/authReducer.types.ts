import { Message, Token, User } from "@/services/api";
import { INormalState } from "@/store/store.types.ts";

export type TAuthReducer = {
  logout: INormalState<void>;
  profile: INormalState<User>;
  verifyOtp: INormalState<Token>;
  requestOtp: INormalState<Message>;
  token: INormalState<string | undefined>;
};
