export type NavbarItem = {
  title: string;
  onScroll?: boolean;
  link?: string;
  options: Array<{
    id: string;
    title: string;
    href: string;
    onClick?: () => void;
  }>
}