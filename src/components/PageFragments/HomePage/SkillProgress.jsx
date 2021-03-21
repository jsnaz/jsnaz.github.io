import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import { skills } from './about.data';

/**
 * Make a column of skills
 * @param {Number} startIndex
 * @param {Number} endIndex
 * @param {Number} skillsList
 * @returns
 */
const makeColumn = (startIndex, endIndex, skillsList) => skillsList
  .slice(startIndex - 1, endIndex)
  .map((skill) => (
    <Fragment key={skill.id}>
      <ProgressBar
        percent={skill.percentage}
        text={skill.text}
      />
    </Fragment>
  ));

/**
 * Make the list of skills on two columns
 * The left column should have the maximum number of rows
 * @param {Array} skillsList
 * @returns
 */
const makeSkills = (skillsList) => {
  const leftNumRows = Math.round(skillsList.length / 2);
  const rightNumRows = skillsList.length - leftNumRows;
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12}>
          {makeColumn(1, leftNumRows, skillsList)}
        </Col>
        <Col xs={24} sm={24} md={12}>
          {makeColumn(leftNumRows + 1, (leftNumRows + 1) + rightNumRows, skillsList)}
        </Col>
      </Row>
    </div>
  );
};

const SkillsProgress = () => (
  <div className="skillsContainer">
    <h2>My Skills</h2>
    <div className="skillsWidget">
      {makeSkills(skills)}
    </div>
  </div>
);

export default SkillsProgress;
