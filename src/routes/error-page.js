import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <img src="https://http.cat/404" alt="not found" />
      <i>{error.statusText || error.message}</i>
    </div>
  );
}
