import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <p>{error.statusText || error.message}</p>
      <img src="https://http.cat/404" alt="not found" />
    </div>
  );
}
