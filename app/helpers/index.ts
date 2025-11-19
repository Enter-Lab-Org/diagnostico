export const calculatePercentage = (value: number, total: number) => {
    return Math.round((value / total) * 100);
};