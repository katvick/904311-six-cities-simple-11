import { useAppDispatch } from '../../hooks';
import { SortType } from '../../const';
import { changeSort, sortOffers } from '../../store/offers/offers';

type SortingProps = {
  sortType: string;
}

function Sorting({sortType}: SortingProps): JSX.Element {
  const dispatch = useAppDispatch();

  const changeSortHandle = (evt: React.MouseEvent<HTMLUListElement>) => {
    const target = evt.target as HTMLLIElement;
    dispatch(changeSort({sort: target.innerText}));
    dispatch(sortOffers());
  };

  return (
    <form className="places__sorting" action="/" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="/icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened" onClick={changeSortHandle}>
        {Object.entries(SortType).map(([key, value]) => (
          <li key={key} className={`places__option ${sortType === value ? 'places__option--active' : ''}`} tabIndex={0}>{value}</li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
