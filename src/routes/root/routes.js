import App from './App';
import List from './List';
import FilterList from '../../components/FilterList';

export default [
  {
    path: '/',
    component: FilterList,
    exact: true,
  },
  {
    path: '/list',
    component: List,
    routes: [
      {
        path: '/list/app',
        component: App,
      },
    ],
  },
];
