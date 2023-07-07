import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  className?: string;
  containerClassName?: string;
}

// <div className='flex flex-col py-2 text-gray-400'>
// <label>Username</label>
// <input
//   className='rounded-lg mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus: outline-none'
//   type='text'
//   value={loginCreds.username}
//   onChange={handleInputChange("username")}
// />
// </div>

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  containerClassName,
  ...rest
}) => {
  return (
    <div className={`${containerClassName}`}>
      <label>{label}</label>
      <input {...rest} />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default InputField;
