export type NavItem = {
  id: string;
  href: string;
  disabled?: boolean;
  children?: Array<NavItem>;
};
