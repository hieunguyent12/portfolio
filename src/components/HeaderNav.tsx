import { useRouter } from "next/router";
import NextLink from "next/link";

export default function HeaderNav() {
  const router = useRouter();

  const pathname = router.pathname;
  const isProjectPage = pathname.startsWith("/projects");
  const isBlogPage = pathname.startsWith("/blog");
  const isHomePage =
    !isProjectPage && !isBlogPage && !pathname.startsWith("/404");

  return (
    <ul className="flex ml-[-0.5rem]">
      <NavItem name="Home" href="/" isActive={isHomePage} />
      <NavItem
        name="Projects"
        href="/projects"
        isActive={isProjectPage}
        className="mx-1"
      />
      <NavItem name="Blog" href="/blog" isActive={isBlogPage} />
    </ul>
  );
}

interface NavItemProps {
  isActive: boolean;
  name: string;
  href: string;
  className?: string;
}

function NavItem({ isActive, name, href, className }: NavItemProps) {
  return (
    <NextLink href={href}>
      <li
        className={`${
          !isActive && "text-slate-500 dark:text-gray-400"
        } text-sm inline-block font-medium hover:bg-neutral-100 cursor-pointer rounded-lg dark:hover:bg-neutral-800  00 p-1.5 transition-all  ${className}`}
      >
        {name}
      </li>
    </NextLink>
  );
}
