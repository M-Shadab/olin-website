import Link from "next/link";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/data-deletion", label: "Data Deletion" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

/**
 * Shared minimal footer for all legal/compliance pages.
 * Renders all legal page cross-links except the current page.
 */
export default function LegalFooter({ current }: { current: string }) {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} OLIN Hospitality Services.</p>
        <div className="flex items-center gap-6">
          {links
            .filter((l) => l.href !== current)
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#1a2b3c] transition-colors"
              >
                {l.label}
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
