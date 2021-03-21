import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags } from '../../../utils/stripTags';
import SEO from '../../Seo';
import { pageText, funFactsData } from './about.data';

const isMobile = window.innerWidth < 758;
const mobileMultiRatio = 1.2;

const makeParagraph = (text) => text.split('\n').map((line) => <p className="aboutText">{line}</p>);
const makeFunFacts = (funFacts) => funFacts.map((funFact) => (
  <Fragment key={funFact.id}>
    <Col xs={24} sm={24} md={12} lg={8}>
      <AboutTile
        img={funFact.img}
        height={isMobile ? funFact.imgSize * mobileMultiRatio : funFact.imgSize}
        alt="location image"
        textH4={funFact.topLine}
        textH3={funFact.bottomLine}
      />
    </Col>
  </Fragment>
));

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        {makeParagraph(pageText.paraOne)}
        <br />
        {makeParagraph(pageText.paraTwo)}
      </div>

      <div className="funFacts">

        <Row gutter={[20, 20]}>
          {makeFunFacts(funFactsData)}
        </Row>
      </div>
    </>
  );
};
export default AboutMe;
