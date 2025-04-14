import * as React from "react";

export function Card({ children, className }: any) {
  return <div className={`border ${className}`}>{children}</div>;
}

export function CardContent({ children }: any) {
  return <div className="p-4">{children}</div>;
}
