import type { ReactNode } from 'react';
import { Sidebar } from '@/components/navigation/sidebar';

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Overview', description: 'KPIs and system status' },
  { href: '/contacts', label: 'Contacts', description: 'Profiles, tags, activity' },
  { href: '/inbox', label: 'Conversations', description: 'Two-way SMS and call log' },
  { href: '/workflows', label: 'Workflows', description: 'Automation queues and runs' },
  { href: '/media', label: 'Media Library', description: 'Video uploads and assets' },
  { href: '/compliance', label: 'Compliance', description: 'Opt-in events and STOP handling' },
  { href: '/settings', label: 'Settings', description: 'Numbers, routing, preferences' },
];

export default function ConsoleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:flex-row lg:gap-12">
        <aside className="w-full shrink-0 rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-900/70 lg:w-72">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">SoniaRose CRM</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Manage relationships, automations, and messaging in one place.
            </p>
          </div>
          <Sidebar items={NAV_ITEMS} />
        </aside>
        <main className="flex-1 space-y-10 pb-16">{children}</main>
      </div>
    </div>
  );
}
