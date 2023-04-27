import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { store } from './store/store';

export function render(url: string, options: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
  return stream;
}
