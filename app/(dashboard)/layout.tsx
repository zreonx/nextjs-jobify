import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid lg:grid-cols-5">
      {/* first column hide on small screen */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>

      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
      {/* second hide dropdown on big screen */}
    </main>
  );
}

export default layout;
