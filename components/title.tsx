import clsx from "clsx";

import { fontVibes } from "@/config/fonts";

export function Title({ children, ...props }: any) {
  return (
    <h3
      {...props}
      className={clsx("font-vibes ", fontVibes.variable, props.className)}
    >
      {children}
    </h3>
  );
}
