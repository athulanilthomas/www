import type { ComponentChildren } from "preact";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class="px-2 py-1 border-2 rounded-sm bg-sky-500 hover:bg-sky-700 transition-colors border-purple-200"
    />
  );
}
