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
import {ChatWindow} from './chatWindow';

type CollaborationsTextProps = {
  key: string;
  className: string;
  euiTextContent: string;
}

export function CollaborationsText(props) {
  const [addChatWindow, setAddChatWindow] = useState(false);

  const handleAddChatWindow = (e) => {
    console.log('handling chat window');
    setAddChatWindow(e);
  }
  
  const events = [
    {
      text: 'Collaborate',
      handler: (text) => {handleAddChatWindow(true)}
    }
  ]

  const showChatWindow = addChatWindow === true ? (
    <div>
      <ChatWindow />
    </div>
  ) : null;

  return (
    <>
    {showChatWindow}
      <TextSelector
        events={events}
        color={'yellow'}
        colorText={true}
      />
      <EuiText>
        {props.children}
      </EuiText>
    </>
  )
}
