
import { FormEventHandler, KeyboardEventHandler, useRef, useState } from "react"
import { api } from "../api";
declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
    directory?: string;
    mozdirectory?: string;
  }
}
type PropType = {
  placeholder: string
}


export function PathInput({placeholder}: PropType) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [directory, setDirectory] = useState<FileList>();
  const titleStyle: React.CSSProperties = {
    fontSize: '36px',

  }

  const inputStyle: React.CSSProperties = {
    width: '500px', // Example width
    height: '500px', // Example height
    padding: '5px', // Example padding
    border: 'none',
    backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
      // Convert FontAwesome icon to data URI
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>`
    )}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    appearance: 'none', // Remove default appearance
    cursor: 'pointer', // Add pointer cursor for better interaction
    outline: 'none', // Remove outline on focus
    transition: 'background-color 0.3s, box-shadow 0.3s',
    
  }
  const hoverInputStyle: React.CSSProperties = {
    ...inputStyle,
    backgroundColor: 'gray'
  }


  const inputContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const directory: HTMLInputElement = e.target;
    const len : number = directory.value.length;
    if (len > 0) {
      const files: FileList = directory.files ? directory.files : new FileList();
      const fileName = files[0].webkitRelativePath.split('/')[0];
      setDirectory(files);
      setInputValue(fileName);
    }
    setIsHovered(false)
  }

  const submitHandler = async (e : React.FormEvent) => {
    const { postData } = api();

  }

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    e.preventDefault();
  }


  return (<main>
    <h3 style={titleStyle}>{placeholder}</h3>
    <form style={inputContainerStyle}>
    <input
        style={isHovered ? hoverInputStyle : inputStyle}
        type="file"
        webkitdirectory=""
        directory=""
        mozdirectory=""
        onDragOver={() => setIsHovered(true)}
        onDragLeave={() => setIsHovered(false)}
        onChange={inputHandler}
        onKeyDown={onKeyDownHandler}
      />
      {inputValue && (<p>{inputValue}</p>)}
      <div>
        <button onSubmit={submitHandler}>취약점 분석</button>
      </div>
    </form>
  </main>)
}

