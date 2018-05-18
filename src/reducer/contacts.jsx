const contactList = [
  {
    name: 'Vlad Anoyan',
    phone: '+(374) 91-313-393',
    id: 1,
  },
  {
    name: 'Lili Ayunc',
    phone: '+(374) 45-234-912',
    id: 2,
  },
  {
    name: 'Mishelle Anri',
    phone: '+(374) 51-510-521',
    id: 3,
  },
  {
    name: 'John Lock',
    phone: '+(374) 22-341-943',
    id: 4,
  },
];

const contacts = (state = contactList, action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('dispatch Worked !!!', state);
      return [
        ...state,
        {
          name: action.name,
          phone: action.number,
          id: action.ky,
        },
      ];
    case 'DEL_USER':
      console.log('dispatch DEL Worked !!!');
      return state.filter(element => element.id !== action.num);
    default:
      return state;
  }
};
export default contacts;
