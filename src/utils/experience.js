// Single source of truth for professional experience.
// Career start: February 2023 (Trainee SDE, Hansa Solutions).
const CAREER_START = new Date(2023, 1); // month is 0-indexed → 1 = February

export const getYearsOfExperience = () => {
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth());

  return (totalMonths / 12).toFixed(1); // e.g. "3.4"
};
