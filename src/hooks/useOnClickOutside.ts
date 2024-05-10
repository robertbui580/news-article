import { useEffect } from "react";

interface IProps {
  ref: React.RefObject<HTMLElement>;
  handler: () => void;
}

export const useOnClickOutside = ({ ref, handler }: IProps) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
