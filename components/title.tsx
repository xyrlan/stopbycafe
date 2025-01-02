import { fontDancingScript } from "@/config/fonts";
import clsx from "clsx";

export function Title({ children, ...props }: any) {
    return (
        <h3 {...props} className={clsx(
            "font-dancingScript",
            fontDancingScript.variable,
            props.className
        )}>
            {children}
        </h3>
    )
}