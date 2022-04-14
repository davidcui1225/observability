/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { isArray } from 'lodash';
import { VisualizationChart } from './visualization_chart';
import { EmptyPlaceholder } from '../../components/explorer/visualizations/shared_components/empty_placeholder';
import { onClickAnnotations } from './annotations';

interface IVisualizationProps {}

export const Visualization = ({ visualizations }: IVisualizationProps, { handleAnnotations }: any) => {
  const { data, vis } = visualizations;
  const { metadata = {} } = visualizations?.data?.rawVizData;
  const { fields = [] } = metadata;

  // check viz data
  const isVizDataValid = data && vis && visualizations?.data?.rawVizData;

  // check fields
  const isVizFieldValid = fields && isArray(fields) && fields.length > 0;

  return (
    <>
      {isVizDataValid && isVizFieldValid ? (
        <VisualizationChart
         visualizations={visualizations}
         handleAnnotations={handleAnnotations}
        />
      ) : (
        <EmptyPlaceholder icon={visualizations?.vis?.iconType} />
      )}
    </>
  );
};
