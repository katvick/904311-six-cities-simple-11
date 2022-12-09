import { useAppSelector } from '../../hooks';

function ErrorMesage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMesage;
