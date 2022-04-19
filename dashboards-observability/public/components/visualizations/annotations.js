/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


export const onClickAnnotations = () => {
  console.log('calling onClickAnnotations');
  var plot = document.getElementById('.plot-container'); // .plot-container .js-plotly-plot
  console.log('plot is', plot);
  // plot.on('plotly_click', function(data) {
  //   console.log('test onclick annotation');
  // });
}
