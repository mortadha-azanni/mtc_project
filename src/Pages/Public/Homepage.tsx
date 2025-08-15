import React from 'react';
import Layout from '../../Components/Layout';
import Section1 from '../../Components/Public/Homepage/Section1';
import Section2 from '../../Components/Public/Homepage/Section2';

const Homepage: React.FC = () => {
  return (
    <Layout showSidebar={false}>
      <div className="space-y-0">
        <Section1 />
        <Section2 />
      </div>
    </Layout>
  );
};

export default Homepage;