export const getImagePath = (path: string): string => {
  const baseUrl = import.meta.env.MODE === 'production' ? '/website-for-acmw' : '';
  return `${baseUrl}${path}`;
};
