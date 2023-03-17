import { nanoid } from 'nanoid';

export const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },

  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
    private: true,
  },
];
