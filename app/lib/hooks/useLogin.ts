import { useMutation } from '@tanstack/react-query';
import { authService, LoginRequest, LoginResponse } from '../api/auth.service';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (credentials: LoginRequest) => authService.login(credentials),
  });
};








