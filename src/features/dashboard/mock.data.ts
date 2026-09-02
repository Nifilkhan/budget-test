export interface StatCard {
  label: string;
  value: string;
  changePercent: string;
  variant: 'blue' | 'teal';
}

export interface ActiveUser {
  id: string;
  name: string;
  phone: string;
  category: string;
  amount: string;
  accountType: string;
  balance: string;
}

export const STAT_CARDS: StatCard[] = [
  { label: 'Total Users', value: '1,567', changePercent: '2.36%', variant: 'blue' },
  { label: 'Savings Account', value: '1,500', changePercent: '2.36%', variant: 'teal' },
  { label: 'Savings Account', value: '1,500', changePercent: '2.36%', variant: 'blue' },
  { label: 'Savings Account', value: '1,500', changePercent: '2.36%', variant: 'teal' }
];

export const ACTIVE_USERS: ActiveUser[] = [
  { id: '1223456789', name: 'Monicca James', phone: '+91 9876543210', category: 'Income / Salary', amount: '$250', accountType: 'Savings', balance: '$6000' },
  { id: '1223456789', name: 'Samantha', phone: '+91 9876543210', category: 'Income / Salary', amount: '$250', accountType: 'Savings', balance: '$6000' },
  { id: '1223456789', name: 'Catherine', phone: '+91 9876543210', category: 'Income / Salary', amount: '$250', accountType: 'Savings', balance: '$6000' },
  { id: '1223456789', name: 'Monicca James', phone: '+91 9876543210', category: 'Income / Salary', amount: '$250', accountType: 'Savings', balance: '$6000' },
  { id: '1223456789', name: 'Beana Sam', phone: '+91 9876543210', category: 'Income / Salary', amount: '$250', accountType: 'Savings', balance: '$6000' }
];