import clsx from "clsx";

import { fontDancingScript } from "@/config/fonts";

export function Title({ children, ...props }: any) {
  return (
    <h3
      {...props}
      className={clsx(
        "font-dancingScript",
        fontDancingScript.variable,
        props.className,
      )}
    >
      {children}
    </h3>
  );
}
