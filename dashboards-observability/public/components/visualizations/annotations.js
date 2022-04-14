/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


export const onClickAnnotations = () => {
  console.log('calling onClickAnnotations');
  var plot = document.getElementById('.js-plotly-plot');

  plot.on('plotly_click', function(data) {
    console.log('test onclick annotation');
  });
}
