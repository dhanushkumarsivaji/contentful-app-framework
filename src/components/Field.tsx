import React,{useEffect} from 'react';
import { PlainClientAPI } from 'contentful-management';
import { Paragraph,Note } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

interface FieldProps {
  sdk: FieldExtensionSDK;
  cma: PlainClientAPI;
}

const Field = (props: FieldProps) => {

  useEffect(() =>{
    props.sdk.window.startAutoResizer()
  })
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return (
          <>
            <Note>This is a note 21323</Note>
            <RichTextEditor sdk={props.sdk}/>
          </>
    );
};

export default Field;
