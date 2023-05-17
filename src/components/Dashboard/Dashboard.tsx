import Link from "next/link";

interface DashboardRoute {
  title: string;
  href: string;
};

export function Dashboard() {
  const dashboardRoutes: DashboardRoute[] = [
    {
      title: "Foydalanuvchilar",
      href: "/user",
    },
    {
      title: "Adminlar",
      href: "/admin",
    },
  ];
  return (
    <aside className="flex flex-col w-[300px] max-w-[300px] h-screen bg-teal-500">
      <div className="px-8 py-6 border-b border-r border-white">
        <h2 className="text-2xl text-white">
          Dashboard
        </h2>
      </div>
      <nav>
        <ul className="flex flex-col">
          {dashboardRoutes.map(route => (
            <li key={route.title}>
              <Link  className="block py-6 px-8 bg-teal-500 text-white rounded-sm hover:bg-white hover:text-teal-500 transition-all duration-300" href={route.href}>
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
