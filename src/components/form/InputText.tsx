import { ComponentProps, FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<ComponentProps<"input">> & {
    msg?: string;
    label?: string;
};

export const InputText: FC<Props> = ({ msg, name, label, ...props }) => {
    return (
        <div className="block w-full font-body">
            <label
                htmlFor={name}
                className="mb-3 block text-base font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                {...props}
                name={name}
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
