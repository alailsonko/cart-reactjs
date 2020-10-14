import React from 'react';

export interface Props {
  name?: string;
}
function App(props: Props) {
  const { name } = props;
  if (name) {
    return (
      <h1>
        Hello,
        {' '}
        {name}
        !
      </h1>
    );
  }
  return <span>Hey, stranger</span>;
}

export default App;
