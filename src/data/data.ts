const cinema_data = {
  id: 20001,
  name: 'Кино',
  events: [
    {
      year: 1987,
      description:
        '"Хищник"/Predator, США (реж. Джон Мактирнан)',
    },
    {
      year: 1988,
      description:
        '"Кто подставил Кролика Роджера"/Who Framed Roger Rabbit, США (реж. Роберт Земекис)',
    },
    {
      year: 1989,
      description:
        '"Назад в будущее 2"/Back to the future 2, США (реж. Роберт Земекис)',
    },
    {
      year: 1990,
      description:
        '"Крепкий орешек 2"/Die Hard 2, США (реж. Ренни Харлин)',
    },
    {
      year: 1991,
      description:
        '"Семейка Аддамс"/ The Addams Family, США (реж. Барри Зонненфельд>)',
    },
  ],
};

const literature_data = {
  id: 30001,
  name: 'Литература',
  events: [
    {
      year: 1992,
      description:
        'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разделах"',
    },
    {
      year: 1994,
      description: '"Бесонница" - Роман Стивена Кинга.',
    },
    {
      year: 1995,
      description:
        'Нобелевская премия по литературе - Шеймсс Хини',
    },
    { year: 1997, description: '' },
    { year: 1997, description: '' },
  ],
};

const theater_data = {
  id: 40001,
  name: 'Театр',
  events: [
    {
      year: 1999,
      description:
        'премьера балета «Золушка» постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
    },
    {
      year: 2000,
      description: 'возобновлено издание журнала "Театр".',
    },
    {
      year: 1997,
      description:
        'премьера трилогии Тома Стоппарда "Берег утопии", Королевский Национальный театр, Лондон',
    },
    { year: 1997, description: '' },
  ],
};

const science_data = {
  id: 60001,
  name: 'Наука',
  events: [
    {
      year: 2015,
      description:
        '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
      year: 2016,
      description:
        'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
    {
      year: 2017,
      description:
        'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
    {
      year: 2018,
      description:
        'Старт космического аппарата Solar Probe Plus, предназначенного для изучения солнца',
    },
    {
      year: 2019,
      description:
        'Google объявил о создании 53-кубитного квантового компьютера',
    },
    {
      year: 2020,
      description:
        'Корабль Crew Dragon вернулся на землю из первого пилотируемого полёта',
    },
  ],
};

export const data_set = [
  cinema_data,
  literature_data,
  theater_data,
  science_data,
];
