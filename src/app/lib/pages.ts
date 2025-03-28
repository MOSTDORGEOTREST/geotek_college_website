export const pages: {
  title: string;
  path: string;
  subs?: { title: string; path: string }[];
}[] = [
  {
    title: 'Главная',
    path: '/',
    subs: [
      {
        title: 'Об организации',
        path: '/about',
      },
      {
        title: 'Документы',
        path: '/docs',
      },
      {
        title: 'Контакты',
        path: '/contacts',
      },
    ],
  },
  {
    title: 'Геотехника',
    path: '/geotek',
    subs: [
      {
        title: 'Технология инструментальных определений',
        path: '/geotek/prog1',
      },
      {
        title: 'Программный комплекс PLAXIS',
        path: '/geotek/prog2',
      },
    ],
  },
  {
    title: 'Международное сотрудничество',
    path: '/international',
  },
  {
    title: 'Иностранные языки',
    path: '/courses',
  },
];
