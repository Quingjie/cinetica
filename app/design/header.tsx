import { PropsWithChildren } from "react";

export const Header = (props: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-between p-4" style={{ gridArea: "header" }}>
      {props.children}
    </div>
  );
};