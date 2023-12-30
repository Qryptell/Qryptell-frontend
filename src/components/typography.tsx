// HEADINGS

interface Props {
  children: React.ReactNode;
  className: string;
}

export function H1({ children, className }: Props) {
  return <h1 className={`text-[calc(2.5rem+1vw)] ${className}`}>{children}</h1>;
}

export function H2({ children, className }: Props) {
  return (
    <h2 className={`text-[calc(2.25rem+1vw)] ${className}`}>{children}</h2>
  );
}

export function H3({ children, className }: Props) {
  return <h3 className={`text-[calc(2rem+1vw)] ${className}`}>{children}</h3>;
}

export function H4({ children, className }: Props) {
  return (
    <h4 className={`text-[calc(1.75rem+1vw)] ${className}`}>{children}</h4>
  );
}

// PARAGRAPH

export function P({ children, className }: Props) {
  return <p className={`text-[calc(1rem+1vw)] ${className}`}>{children}</p>;
}
