import * as React from "react";

export function Button({ children, className }: any) {
  return <button className={`font-semibold ${className}`}>{children}</button>;
}
