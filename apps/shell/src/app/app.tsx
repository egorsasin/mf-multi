import * as React from 'react';

const Component = React.lazy(() => import('react-remote/Module'));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-ng-remote-entry': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export function App() {
  const ngComponentRef = React.useRef();

  const ngComponent = async () => {
    const { mount } = await import('ng-remote/Routes');
    ngComponentRef.current = mount();
  };

  React.useEffect(() => {
    ngComponent();
  }, []);

  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <h2>REACT SHELL APPLICATION</h2>
      </header>

      <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
        <React.Suspense fallback={null}>
          <Component />
        </React.Suspense>

        <app-ng-remote-entry></app-ng-remote-entry>
      </div>
    </div>
  );
}

export default App;
