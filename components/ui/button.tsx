import * as React from "react";

export function Button({ children, className }: any) {
  return <button className={`px-4 py-2 rounded-xl font-semibold ${className}`}>{children}</button>;
}
