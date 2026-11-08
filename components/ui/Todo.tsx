/** Marque visiblement une information que le propriétaire doit renseigner. */
export function Todo({ children }: { children?: React.ReactNode }) {
  return <span className="todo">{children ?? "[À compléter]"}</span>;
}
