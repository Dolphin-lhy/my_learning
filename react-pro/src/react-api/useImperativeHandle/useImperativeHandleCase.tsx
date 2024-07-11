import { useRef, useImperativeHandle, forwardRef } from 'react';

const UseImperativeHandleCase: React.FC = () => {
  interface CustomInputProps {
    placeholder?: string;
  }
  
  interface CustomInputHandle {
    nativeElement: HTMLInputElement;
  }

  const CustomInput = forwardRef<CustomInputHandle, CustomInputProps>((props, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);
  
    useImperativeHandle(ref, () => ({
      nativeElement: internalRef.current!,
    }));
  
    return <input ref={internalRef} placeholder={props.placeholder} />;
  });
  const inputRef = useRef<CustomInputHandle>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.nativeElement.focus();
    }
  }; 

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Enter text here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseImperativeHandleCase;
