import Link from 'next/link';

interface LogoProps {
  /** Source URL or imported image asset */
  logoSrc: string;
  /** Optional click handler (e.g., to close mobile menus) */
  onClick?: () => void;
  /** Optional custom class name for the wrapper link */
  className?: string;
}

export function Logo({ logoSrc, onClick, className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`flex min-w-0 items-center gap-2 ${className}`}
    >
      <img
        src={logoSrc}
        alt="Book More Leads logo"
        width={48}
        height={48}
        className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
      />

      <div className="min-w-0 leading-none">
        <div className="whitespace-nowrap text-[13px] font-extrabold tracking-tight text-white sm:text-[15px]">
          BOOK MORE <span className="text-blue-400">LEADS</span>
        </div>

        <div className="mt-1 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-[9px] sm:tracking-[0.18em]">
          Lead → Job System
        </div>
      </div>
    </Link>
  );
}