// src/types/user.types.ts

export type UserRole = 'retail' | 'wholesale' | 'admin' | 'pending';
export type UserType = 'retail' | 'wholesale';  // برای فرم ثبت‌نام

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WholesaleRequest {
  id: string;
  userId: string;
  storeName: string;
  instagram?: string;
  phone: string;
  description?: string;
  status: 'pending' | 'approved' | 'rejected';
  adminNote?: string;
  createdAt: string;
  reviewedAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  // فیلدهای مشترک
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  
  // نوع کاربر (جدید)
  userType: UserType;  // 'retail' یا 'wholesale'
  
  // فیلدهای مخصوص عمده (اختیاری)
  storeName?: string;
  storeAddress?: string;
  instagram?: string;
  website?: string;
  description?: string;
  
  // قوانین
  acceptTerms: boolean;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
  requestWholesale: (data: Partial<WholesaleRequest>) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}