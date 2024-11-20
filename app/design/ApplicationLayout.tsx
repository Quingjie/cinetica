import { PropsWithChildren } from "react";

export const ApplicationLayout = (props: PropsWithChildren) => {
  return (
    <div
      className="bg-white h-screen w-screen grid"
      style={{
        gridTemplateAreas: `
          "header header"
          "sidebar content"
        `,
        gridTemplateColumns: "200px 1fr",
        gridTemplateRows: "75px 1fr",
      }}
    >
      {props.children}
    </div>
  );
};