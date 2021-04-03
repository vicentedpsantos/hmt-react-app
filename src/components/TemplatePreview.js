import React from 'react';
import styled from 'styled-components';

const PreviewBox = styled.div`
  font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  margin: auto;
  max-width: 240px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
`;

const SelectTemplateButton = styled.div`
  margin: auto;
  vertical-alignment: middle;
  cursor: pointer;
  font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  height: 27px;
  line-height: 27px;
  min-width: 54px;
  padding: 0 8px;
  color: #4D90FE;
  background-image: linear-gradient(top,#4d90fe,#4787ed);
  margin-top: 1rem;
`;

const PreviewText = styled.div`
  white-space: pre-line;
`;

const TemplatePreview = ({ previewedTemplate, handleSelect}) => {
  return(
    <PreviewBox>
      <Title>Template Preview</Title>
      <PreviewText id="selectedTemplate">
        { previewedTemplate }
      </PreviewText>
      <SelectTemplateButton onClick={() => handleSelect(previewedTemplate)}>Select Template</SelectTemplateButton>
    </PreviewBox>
  )
}

export default TemplatePreview;
