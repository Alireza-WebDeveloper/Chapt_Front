export interface LoginUserResponse {
  login: {
    message: string;
    status: number;
    data: {
      user: {
        _id: string;
        username: string;
      };
    };
  };
}
export interface LoginState {
  username: string;
  password: string;
}
