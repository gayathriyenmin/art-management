export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const truncateText = (text: string, length = 100): string => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};
