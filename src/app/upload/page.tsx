// FileUploadPage.tsx

import React from 'react';
import { useDropzone } from 'react-dropzone';

interface File {
  name: string;
  path: string;
}

interface FileUploadPageProps {}

const FileUploadPage: React.FC<FileUploadPageProps> = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file: File) => {
        // Handle file upload here
        console.log(file);
      });
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div
        {...getRootProps()}
        className="flex items-center justify-center w-64 h-64 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop an image here, or click to select a file</p>
        )}
      </div>
    </div>
  );
};

export default FileUploadPage;