export interface DataResponse {
  message: string;
  status: number;
}

export interface IAuthResponse extends DataResponse {
  auth: {
    accessToken: string;
    active: boolean;
    refreshToken: string;
  };
  profile: {
    email: string;
    name: string;
  };
}

export interface IProfileResponse extends DataResponse {
  profile: {
    email: string;
    name: string;
  };
}
