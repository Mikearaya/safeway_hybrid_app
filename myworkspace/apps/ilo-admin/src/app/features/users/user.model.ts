export class UserViewModel {
  id: number;
  username: string;
  phone_number: string;
  email: string;
  roleId: string;
  role: string;
}

export class UserModel {
  ID?: number;
  username: string;
  fullname: string;
  password: string;
}

export class User {
  user: UserModel;
}
