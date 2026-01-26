import { Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
