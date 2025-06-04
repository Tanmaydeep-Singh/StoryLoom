import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

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
    const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    router.push('/')
    
    console.log("Logging out...");
  };

  return (
    <aside className="w-64 h-screen border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between">
      <nav className="flex flex-col gap-1 px-4 py-6 overflow-y-auto">
        {profileLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150
                ${isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"}
              `}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 rounded-md text-sm font-medium transition-colors bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
