import React from 'react';
import styled from 'styled-components';
import TemplatePreview from './TemplatePreview';
import { useState } from 'react';

const List = styled.div`
  margin: auto;
  max-width: 240px;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  margin: 0.2rem;
  vertical-alignment: middle;
  cursor: pointer;
  font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  display: inline-block;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  height: 27px;
  line-height: 27px;
  min-width: 54px;
  padding: 0 8px;
  text-decoration: none;
  background-color: #4D90FE;
  background-image: linear-gradient(top,#4d90fe,#4787ed);
  border: 1px solid #3079ED;
  color: white;

  &:hover {
    border: 1px solid #2F5BB7;
    background-color: #357AE8;
    background-image: linear-gradient(top,#4d90fe,#357ae8);
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
`;

const TemplateList = ({ templates }) => {
  const [currentTemplate, setCurrentTemplate] = useState();

  const handleSelectCurrent = (template) => {
    setCurrentTemplate(template);
  }

  const handleSelect = template => {
    const targetWindow = window.parent;

    targetWindow.postMessage(template, '*');
  }

  return(
    <div>
      <List>
        {templates.map((template) => (
          <ListItem key={template.id} value={template.content} onClick={() => handleSelectCurrent(template.content)}>
            {template.name}
          </ListItem>
        ))}
      </List>

      {currentTemplate && <TemplatePreview previewedTemplate={currentTemplate} handleSelect={handleSelect} />}
    </div>
  )
}

export default TemplateList;
