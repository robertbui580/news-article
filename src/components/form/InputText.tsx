import React, { FC } from "react";

interface Props {
  classNameContainer?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  msg?: string;
  disabled?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputText: FC<Props> = ({
  classNameContainer,
  placeholder,
  defaultValue,
  msg,
  name,
  label,
  ...props
}) => {
  return (
    <div className={`${classNameContainer} block w-full font-body`}>
      <label
        htmlFor={name}
        className="mb-3 block text-base font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...props}
        type="text"
        className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-green-700 focus:shadow-md"
      />
      {msg && (
        <p className="text-red-400 text-left text-base italic mt-1 mb-3">
          {msg}
        </p>
      )}
    </div>
  );
};
