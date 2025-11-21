import React, { useState } from 'react';
import Layout from './components/Layout';
import SitemapGeneratorUI from './components/SitemapGeneratorUI';
import Home from './components/Home';

const App: React.FC = () => {
  const [showGenerator, setShowGenerator] = useState(false);

  return (
    <Layout showNav={showGenerator}>
      {showGenerator ? (
        <SitemapGeneratorUI />
      ) : (
        <Home onGetStarted={() => setShowGenerator(true)} />
      )}
    </Layout>
  );
};

export default App;
