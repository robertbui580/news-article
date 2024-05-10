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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const InputTextarea: FC<Props> = ({
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
      <textarea
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...props}
        rows={4}
        className="w-full resize-none rounded-md border bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-green-700 focus:shadow-md"
      />
      {msg && (
        <p className="text-red-400 text-left text-base italic mb-3">{msg}</p>
      )}
    </div>
  );
};
