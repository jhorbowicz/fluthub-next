import Link from 'next/link';

export default function ButtonLink({to, text, additionalStyle=""}: ButtonLinkProps) {
  return(
    <Link href={to}>
      <a className={`button-link ${additionalStyle}`}>{text}</a>
    </Link>
  )
}