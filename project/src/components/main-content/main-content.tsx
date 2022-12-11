import CitiesList from '../cities-list/cities-list';
import CityContent from '../city-content/city-content';

function MainContent(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList />
      <CityContent />
    </main>
  );
}

export default MainContent;
