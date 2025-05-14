import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  title: string;
  titleBtn?: ReactNode;
}
const PageLayout = ({ title, titleBtn, children }: Props) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        {titleBtn}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
