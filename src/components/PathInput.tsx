
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react"
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSelected, setIsSelected] = useState(false);
  const inputStyle: React.CSSProperties = {
    width: '20px', // Example width
    height: '20px', // Example height
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
  }

  const inputContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const inputHandler = () => {
    setIsSelected(inputRef.current !== null)
  }


  return (<main>
    <p>{placeholder}</p>
    <div style={inputContainerStyle}>
    <input
        style={inputStyle}
        ref={inputRef}
        type="file"
        webkitdirectory=""
        directory=""
        mozdirectory=""
        onChange={inputHandler}
      />
      <div>
        1
        {isSelected ? 'hi' : 'hello'}
      </div>
    </div>

  </main>)
}

