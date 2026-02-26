// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { 
  User, 
  AuthContextType, 
  LoginCredentials, 
  RegisterData, 
  WholesaleRequest 
} from '../types/user.types';

// دیتای موقت برای تست (بعداً با API واقعی جایگزین میشه)
const MOCK_USERS = [
  {
    id: '1',
    fullName: 'کاربر تست',
    email: 'test@example.com',
    phone: '09123456789',
    password: '123456',
    role: 'retail' as const,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    fullName: 'عمده‌فروش نمونه',
    email: 'wholesale@example.com',
    phone: '09129876543',
    password: '123456',
    role: 'wholesale' as const,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// تعریف تایپ Props
interface AuthProviderProps {
  children: ReactNode;
}

// ایجاد Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// کامپوننت Provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // بررسی وجود کاربر در localStorage هنگام بارگذاری اولیه
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // تابع ورود
  const login = async (credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true);
    try {
      // شبیه‌سازی درخواست به سرور
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // پیدا کردن کاربر در دیتای موقت
      // پیدا کردن کاربر در دیتای موقت
const foundUser = MOCK_USERS.find(u => u.email === credentials.email);

if (!foundUser || foundUser.password !== credentials.password) {
  throw new Error('ایمیل یا رمز عبور اشتباه است');
}

// ایجاد آبجکت جدید بدون پسورد
const userWithoutPassword: User = {
  id: foundUser.id,
  fullName: foundUser.fullName,
  email: foundUser.email,
  phone: foundUser.phone,
  role: foundUser.role,
  createdAt: foundUser.createdAt,
  updatedAt: foundUser.updatedAt,
};

// ذخیره در state و localStorage
setUser(userWithoutPassword);
localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // تابع خروج
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // تابع ثبت‌نام
  const register = async (data: RegisterData): Promise<void> => {
    setIsLoading(true);
    try {
      // شبیه‌سازی درخواست به سرور
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // بررسی وجود کاربر
      const existingUser = MOCK_USERS.find(u => u.email === data.email);
      if (existingUser) {
        throw new Error('این ایمیل قبلاً ثبت شده است');
      }

      // تعیین نقش بر اساس نوع کاربر
      let role: 'retail' | 'pending' = 'retail';
      if (data.userType === 'wholesale') {
        role = 'pending';
      }

      // ایجاد کاربر جدید
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        role: role,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      // اگه کاربر عمده‌فروش هست، درخواست رو ثبت کن
      if (data.userType === 'wholesale') {
        console.log('Wholesale request saved:', {
          userId: newUser.id,
          storeName: data.storeName,
          instagram: data.instagram,
          description: data.description
        });
      }
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // درخواست عمده‌فروشی
  const requestWholesale = async (data: Partial<WholesaleRequest>): Promise<void> => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!user) {
        throw new Error('لطفاً ابتدا وارد حساب خود شوید');
      }

      // درخواست به سرور ارسال میشه
      console.log('Wholesale request:', { userId: user.id, ...data });
      
      // آپدیت وضعیت کاربر
      const updatedUser = { ...user, role: 'pending' as const };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Wholesale request error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // بروزرسانی پروفایل
  const updateProfile = async (data: Partial<User>): Promise<void> => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!user) {
        throw new Error('لطفاً ابتدا وارد حساب خود شوید');
      }

      const updatedUser = { ...user, ...data, updatedAt: new Date().toISOString() };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    requestWholesale,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export خود context برای استفاده در hook
export { AuthContext };