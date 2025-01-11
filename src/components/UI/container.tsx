import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
}: ContainerProps<C>) => {
  const Component = as || "div";
  return <Component>{children}</Component>;
};

export default Container;

//polymorpic component with generic function
//can share logic or style
