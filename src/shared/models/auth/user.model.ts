export interface SB_UserModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  role: "user" | "admin";
  created_at: Date | string;
}
