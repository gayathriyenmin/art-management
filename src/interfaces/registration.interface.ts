export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  course: string;
  experience: 'Beginner' | 'Intermediate' | 'Advanced';
  message?: string;
  agreeToTerms: boolean;
}
