type MustacheMarkProps = {
  className?: string;
};

export function MustacheMark({ className }: MustacheMarkProps) {
  return (
    <svg
      viewBox="0 0 64 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M8 12c0-4.4 3.6-8 8-8 5.2 0 9.1 2.8 12.3 6.3L32 14l3.7-3.7C38.9 6.8 42.8 4 48 4c4.4 0 8 3.6 8 8 0 4.4-3.6 8-8 8-6.7 0-11.1-4.5-16-10-4.9 5.5-9.3 10-16 10-4.4 0-8-3.6-8-8z" />
    </svg>
  );
}
