import { ReactNode } from "react";

export default function Container(props: { children: ReactNode }) {
  return <div className="mx-4 my-10">{props.children}</div>;
}
