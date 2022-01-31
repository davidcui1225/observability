/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Popover } from 'rsuite';

export function ChatWindow(props) {
  return (
    <>
      <Popover title="Popover Title">
        <p>I am sample content of the Popover!</p>

      </Popover>
    </>
  )
}