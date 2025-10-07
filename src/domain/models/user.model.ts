export class UserModel {
  email: string;
  password: string;
  signup_otp?: number;
  signup_otp_expiry?: Date;
  forget_email_otp?: number;
  forget_email_otp_expiry?: Date;
  is_social_login?: boolean;
  is_email_verified?: boolean;
  upcoming_email?: string;
  upcoming_email_otp?: number;
  upcoming_email_otp_expiry?: Date;
  allow_notifications?: boolean;
  is_active?: boolean;
  is_banned?: boolean;
  role?: string;
  device_id?: string;
}

export class FetchUserModel {
  id: number;
  email: string;
  password: string;
  signup_otp: number;
  signup_otp_expiry: Date;
  forget_email_otp: number;
  forget_email_otp_expiry: Date;
  is_social_login: boolean;
  is_email_verified: boolean;
  upcoming_email: string;
  upcoming_email_otp: number;
  upcoming_email_otp_expiry: Date;
  allow_notifications: boolean;
  is_active: boolean;
  is_banned: boolean;
  role: string;
  device_id?: string;
}

export class UpdateUserModel {
  email?: string;
  password?: string;
  signup_otp?: number;
  signup_otp_expiry?: Date;
  forget_email_otp?: number;
  forget_email_otp_expiry?: Date;
  is_social_login?: boolean;
  is_email_verified?: boolean;
  upcoming_email?: string;
  upcoming_email_otp?: number;
  upcoming_email_otp_expiry?: Date;
  allow_notifications?: boolean;
  is_active?: boolean;
  is_banned?: boolean;
  role?: string;
  device_id?: string;
}
