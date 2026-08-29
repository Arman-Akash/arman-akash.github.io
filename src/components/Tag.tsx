/** Small pill used for technology and skill lists. */
export function Tag({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </li>
  )
}
