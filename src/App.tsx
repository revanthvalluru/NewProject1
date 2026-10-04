import React from 'react';
import { Providers } from './app/providers';
import RootLayout from './app/layout';
import HomePage from './app/page';

export default function App() {
  return (
    <Providers>
      <RootLayout>
        <HomePage />
      </RootLayout>
    </Providers>
  );
}
