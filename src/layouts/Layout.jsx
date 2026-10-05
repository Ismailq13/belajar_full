import { NavLink, Outlet } from "react-router";

const menu = [
  { ke: "/", label: "Ringkasan" },
  { ke: "/program", label: "Program" },
  { ke: "/donatur", label: "Donatur" },
  { ke: "/follow-up", label: "Follow-up" },
  { ke: "/upload", label: "Upload" },
];

function Layout() {
  return (
    <div className="min-h-screen md:flex">
      <aside className="bg-emerald-800 p-5 text-white md:w-60 md:shrink-0">
        <p className="text-lg font-bold">LAZ Darul Hikam</p>
        <p className="text-sm text-emerald-200">Dashboard</p>

        <nav className="mt-6 flex gap-1 overflow-x-auto md:flex-col">
          {menu.map((item) => (
            <NavLink
              key={item.ke}
              to={item.ke}
              end
              className={({ isActive }) =>
                "whitespace-nowrap rounded-lg px-3 py-2 " +
                (isActive
                  ? "bg-emerald-700 font-semibold"
                  : "text-emerald-100 hover:bg-emerald-700/50")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-emerald-50 p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
