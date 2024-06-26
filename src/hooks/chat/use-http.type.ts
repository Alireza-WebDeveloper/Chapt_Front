export interface QueryData {
  messages: Message[];
}

export interface QueryVariables {
  user_send: string | null;
  user_recive: string | null;
}

export interface User {
  _id: string;
  username: string;
}

export interface Message {
  _id: string;
  user_send: User;
  user_recive: User;
  content: string;
  timestamp?: string;
}

interface Login {
  message: string;
  status: number;
  data: {
    user: User;
  };
}

interface Source {
  url: string;
}

export interface MessageResponse {
  messages: Message[];
  source: Source;
  profile: Login;
}

export interface QueryResponse {
  getMessages: Message[];
}

export interface MutationResponse {
  sendMessage: Message[];
}

export interface ContactState {
  _id: string;
  username: string;
}
