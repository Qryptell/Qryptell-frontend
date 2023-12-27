// HEADINGS

export function H1({ content, className }) {
  return <h1 className={`text-[calc(2.5rem+1vw)] ${className}`}>{content}</h1>;
}

export function H2({ content, className }) {
  return <h2 className={`text-[calc(2.25rem+1vw)] ${className}`}>{content}</h2>;
}

export function H3({ content, className }) {
  return <h3 className={`text-[calc(2rem+1vw)] ${className}`}>{content}</h3>;
}

export function H4({ content, className }) {
  return <h4 className={`text-[calc(1.75rem+1vw)] ${className}`}>{content}</h4>;
}

// PARAGRAPH

export function P({ content, className }) {
  return <p className={`text-[calc(1rem+1vw)] ${className}`}>{content}</p>;
}
