import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div className='experiment-page'>
      <div className='header'>
      </div>
      <div className='content'>
      <h5>Sorry, an unexpected error has occurred.</h5>
      <p>{error.statusText || error.message}</p>
      </div>
    </div>
  )
}