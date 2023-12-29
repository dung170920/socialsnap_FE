export enum UserStatus {
  Actived,
  Banned,
}

export interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth?: Date;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status: UserStatus;
  bio?: string;
  avatar?: string;
  coverPhoto?: string;
}

export interface UserRequest {}
