/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiButton, EuiButtonEmpty, EuiCommentList, EuiCommentProps, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiPopover, EuiSpacer, EuiText } from '@elastic/eui';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CSS from 'csstype';
import { Paragraphs } from '../notebooks/components/paragraph_components/paragraphs';

const collaborationWindowStyle: CSS.Properties = {
  // maxWidth: '200px',
  // maxHeight: '300px',
}

export function CollaborationsParagraph(props: any) {
  const  {
    comments,
    paraRef,
    pplService,
    para,
    setPara,
    dateModified,
    index,
    paraCount,
    paragraphSelector,
    textValueEditor,
    handleKeyPress,
    addPara,
    DashboardContainerByValueRenderer,
    deleteVizualization,
    http,
    selectedViewId,
    setSelectedViewId,
    deletePara,
    runPara,
    clonePara,
    movePara,
    showQueryParagraphError,
    queryParagraphErrorMessage
  } = props;

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [collaborationComment, setCollaborationComment] = useState('');
  const [collaborationsMouseover, setCollaborationsMouseover] = useState({display: 'none'});

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const onCollaborationCommentChange = (e) => {
    setCollaborationComment(e.target.value);
  };

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const submitNewComment = () => {
    console.log('new comment is', collaborationComment);
    console.log('username is', username);
    console.log('para is', para);
    let newComment = {
      username: username,
      children: collaborationComment,
      timestamp: Date().toString()
    };
    console.log('new comment object is', newComment);
    comments.push(newComment);
    console.log('comments after adding new comment is', comments);
  }

  useEffect(() => {
  }, [comments]);

  const iconStyle: CSS.Properties = {
    marginTop: '30px',
    minWidth: '25px',
    // display: ''
  };

  const collaborationsButton = (
    <div
      onMouseEnter={e => {setCollaborationsMouseover({display: 'block'})}}
      onMouseLeave={e => {setCollaborationsMouseover({display: 'none'})}}
    >
      <EuiButtonEmpty
        iconType="annotation"
        style={iconStyle}
        size="s"
        onClick={onButtonClick}
      />
    </div>
  );

  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiPopover
            style={collaborationWindowStyle}
            button={collaborationsButton}
            isOpen={isPopoverOpen}
            closePopover={closePopover}
          >
            <EuiCommentList
              comments={comments}
            />
            <EuiSpacer/>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFieldText
                  placeholder='Enter username'
                  value={username}
                  onChange={(e) => onUsernameChange(e)}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFieldText
                  placeholder='Type a message...'
                  value={collaborationComment}
                  onChange={(e) => onCollaborationCommentChange(e)}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton
                fill
                onClick={() => submitNewComment()}
                >
                  Submit
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPopover>
        </EuiFlexItem>
        <EuiFlexItem>
          <Paragraphs
            ref={paraRef}
            pplService={pplService}
            para={para}
            setPara={setPara}
            dateModified={dateModified}
            index={index}
            paraCount={paraCount}
            paragraphSelector={paragraphSelector}
            textValueEditor={textValueEditor}
            handleKeyPress={handleKeyPress}
            addPara={addPara}
            DashboardContainerByValueRenderer={DashboardContainerByValueRenderer}
            deleteVizualization={deleteVizualization}
            http={http}
            selectedViewId={selectedViewId}
            setSelectedViewId={setSelectedViewId}
            deletePara={deletePara}
            runPara={runPara}
            clonePara={clonePara}
            movePara={movePara}
            showQueryParagraphError={showQueryParagraphError}
            queryParagraphErrorMessage={queryParagraphErrorMessage}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  )
}