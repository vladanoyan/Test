import React from 'react';
import FormController from '../../lib/FormController';
import NavBar from '../../components/ListingNavbar';
import Footer from '../../components/Footer';
import FilterList from '../../components/FilterList';
import cs from './App.pcss';


class App extends FormController {
  render() {
    return (
      <div>
        <NavBar />
        <div className={cs.App}>
          <FilterList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
