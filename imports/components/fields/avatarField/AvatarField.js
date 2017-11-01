import React from 'react';
import Dropzone from 'react-dropzone';
import { Image, Transformation } from 'cloudinary-react';

const AvatarField = props =>
  props.editable ? (
    <Dropzone
      className={`dropzone ${props.className}`}
      onDrop={props.onDrop}
      multiple={false}
      accept="image/*"
      style={{ height: `${props.height}px`, width: `${props.width}px` }}
    >
      <Image
        className={props.className}
        publicId={props.publicId}
        width={props.width}
        height={props.height}
        crop="lfill"
      />
    </Dropzone>
  ) : (
    <Image
      className={props.className}
      publicId={props.publicId}
      width={props.width}
      height={props.height}
      crop="lfill"
    />
  );

export default AvatarField;
