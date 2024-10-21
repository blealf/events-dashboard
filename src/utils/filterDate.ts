/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);

export const dateFilters = ['Most recent', 'Oldest', 'Last month', 'This month', 'Next month'];

export const filterDates = (dates: any[], filter: string) => {
  const now = dayjs(); // current date
  const startOfMonth = now.startOf('month');
  const endOfMonth = now.endOf('month');
  const startOfLastMonth = startOfMonth.subtract(1, 'month');
  const endOfLastMonth = startOfMonth.subtract(1, 'day');
  const startOfNextMonth = endOfMonth.add(1, 'day');
  const endOfNextMonth = startOfNextMonth.endOf('month');

  switch (filter?.toLowerCase()) {
    case 'most recent':
      return dates.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

    case 'oldest':
      return dates.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

    case 'last month':
      return dates.filter(date => dayjs(date.date).isBetween(startOfLastMonth, endOfLastMonth));

    case 'this month':
      return dates.filter(date => dayjs(date.date).isBetween(startOfMonth, endOfMonth));

    case 'next month':
      return dates.filter(date => dayjs(date.date).isBetween(startOfNextMonth, endOfNextMonth));

    default:
      return dates;
  }
};
