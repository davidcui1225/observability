/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import $ from 'jquery';
import React from "react";
import { CollaborationsText } from './textCollaborations';

function getSelectedText() {
  var text = "";
  if (typeof window.getSelection != "undefined") {
      text = window.getSelection().toString();
  } else if (typeof document.selection != "undefined") {
      text = document.selection.createRange().text;
  }
  return text;
}

export function doSomethingWithSelectedText() {
  var selectedText = getSelectedText();
  if (selectedText != "") {
    console.log('selected text is', selectedText);
    // add the popover
    const collaborationPopover = document.createElement("div");
    collaborationPopover.innerHTML = popover();

    var sel = window.getSelection()
    console.log('sel is', sel);
    
    var range = sel.getRangeAt(0);
    
    range.collapse(false);
    range.insertNode(collaborationPopover);
    // sel.addRange(range);
    // range.surroundContents(collaborationPopover);
    // sel.removeAllRanges();
    // sel.addRange(range);
    return true;
  }
  return false;
}

// document.onmouseup = doSomethingWithSelectedText;
// document.onkeyup = doSomethingWithSelectedText;

const popover = () => {
  // return `
  //   <div class="euiPopover__panelArrow euiPopover__panelArrow--bottom" style="left: 154px; top: 0px;"></div>
  //   <p id="id0bf6201-6f46-11ec-bfa8-d31550d68e73" class="euiScreenReaderOnly">You are in a dialog. To close this dialog, hit escape.</p>
  //   <div>
  //     <div class="euiText euiText--medium" style="width: 300px;">
  //         <p>Popover content that’s wider than the default width</p>
  //     </div>
  //   </div>
  // `
  return (
    <CollaborationsText/>
  )
}