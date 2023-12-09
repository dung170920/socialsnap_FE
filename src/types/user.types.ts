export enum VerifyStatus {
  UnVerified,
  Verified,
  Banned,
}

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  verify: VerifyStatus;
  avatar?: string;
}
