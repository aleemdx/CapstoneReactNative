// validation function messages

export const RequiredMessage = (name: string) => `${name} is required`;
export const InvalidMessage = (name: string) => `${name} is invalid`;
export const invalidPhoneMessage = (phone: string) =>
  `${phone} must be in US format`;
export const MinMessage = (name: string, min: number) =>
  `${name} should be minimum ${min}`;
export const MaxMessage = (name: string, min: number) =>
  `${name} should be less than ${min}`;
export const invalidFloatMessage = (fieldName: string): string =>
  `${fieldName} should be in 00.00 format`;
export const percentageInvalidMessage = (fieldName: string) =>
  `${fieldName} Value should greater than 0  but less than or equal to 100 (0 < ${fieldName} <= 100)`;
