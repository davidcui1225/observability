/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  EuiButton,
  EuiPanel,
  EuiPopover,
  EuiText, 
} from "@elastic/eui";
import TextSelector from 'text-selection-react';
// import Popover from 'react-text-selection-popover';

type CollaborationsTextProps = {
  key: string;
  className: string;
  euiTextContent: string;
}

export function CollaborationsText(props) {
  const [addChatWindow, setAddChatWindow] = useState(false);

  const handleAddChatWindow = (e: boolean | ((prevState: boolean) => boolean)) => {
    console.log('handling chat window');
    setAddChatWindow(e);
  }
  
  const events = [
    {
      text: 'Collaborate',
      handler: (text: any) => {handleAddChatWindow(true)}
    }
  ]

  const showChatWindow = addChatWindow === true ? (
    <>
    </>
  ) : null;

  return (
    <>
      {/* <TextSelector
        events={events}
        color={'yellow'}
        colorText={true}
      /> */}
      <EuiText>
        {/* {showChatWindow} */}
        {props.children}
      </EuiText>
    </>
  )
}
