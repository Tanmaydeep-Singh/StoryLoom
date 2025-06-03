import Link from "next/link";
import { usePathname } from "next/navigation";

const profileLinks = [
  { href: "/profile/dashboard", label: "Dashboard" },
  { href: "/profile/activities", label: "Activities" },
  { href: "/profile/bookmarks", label: "Bookmarks" },
  { href: "/profile/likes", label: "Likes" },
  { href: "/profile/my-writings", label: "My Writings" },
  { href: "/profile/settings", label: "Settings" },
  { href: "/profile/subscriptions", label: "Subscriptions" },
];

export default function ProfileSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-xs p-4 border-r border-gray-200 dark:border-gray-800">
      <nav className="flex flex-col gap-2">
        {profileLinks.map((link) => {
          const isActive = pathname === link.href;

          const baseClasses =
            "px-4 py-2 rounded-md text-sm font-medium transition-colors";
          const activeClasses = "bg-blue-600 text-white";
          const inactiveClasses =
            "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800";

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
