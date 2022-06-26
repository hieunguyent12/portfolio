export interface Props {
  title: string;
  body: string;
  href: string;
}

export default function Card({ href, title, body }: Props) {
  return (
    <li className="link-card flex list list-none text-gray-700 dark:text-white">
      <a href={href}>
        <p className="m-0 p-0 card-title">
          {title}
          <span>&rarr;</span>
        </p>
        <p className="text-sm mt-2">{body}</p>
      </a>
    </li>
  );
}
