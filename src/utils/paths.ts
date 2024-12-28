export const getImagePath = (imageName: string): string => {
  const base = import.meta.env.BASE_URL;
  return `${base}images/${imageName}`;
};
