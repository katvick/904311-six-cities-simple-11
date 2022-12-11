import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import MainContent from '../../components/main-content/main-content';


function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Main</title>
      </Helmet>

      <Header />
      <MainContent />
    </div>
  );
}

export default MainPage;
