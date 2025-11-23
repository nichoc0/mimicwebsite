import type { ReactNode } from 'react';
import Link from 'next/link';
import { getContacts } from '@/lib/api';
import { formatDate, formatName } from '@/lib/format';

const MAX_RECENT_CONTACTS = 6;

export default async function DashboardPage() {
  const { data, error } = await getContacts();
  const contacts = data ?? [];

  const totalContacts = contacts.length;
  const optedIn = contacts.filter((contact) => contact.optInStatus === 'OPTED_IN').length;
  const needsReview = contacts.filter((contact) => contact.optInStatus === 'UNKNOWN').length;
  const activeConversations = contacts.filter((contact) => contact.messages?.length).length;

  const recentContacts = contacts
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, MAX_RECENT_CONTACTS);

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h2 className="text-3xl font-semibold">Overview</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Monitor contact growth, messaging activity, and workflow readiness at a glance.
        </p>
        {error && (
          <p className="rounded-md border border-amber-500 bg-amber-100 px-3 py-2 text-xs text-amber-800 dark:border-amber-400 dark:bg-amber-900/30 dark:text-amber-200">
            Unable to reach the API. Showing cached counts where possible.
          </p>
        )}
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Contacts" value={totalContacts.toLocaleString()}>
          <span className="text-xs text-slate-500 dark:text-slate-400">All contacts in CRM</span>
        </MetricCard>
        <MetricCard label="Opted in" value={optedIn.toLocaleString()}>
          <span className="text-xs text-emerald-600 dark:text-emerald-400">Ready for messaging</span>
        </MetricCard>
        <MetricCard label="Needs review" value={needsReview.toLocaleString()}>
          <span className="text-xs text-amber-600 dark:text-amber-300">Missing opt-in status</span>
        </MetricCard>
        <MetricCard label="Active conversations" value={activeConversations.toLocaleString()}>
          <span className="text-xs text-slate-500 dark:text-slate-400">Last 5 messages stored</span>
        </MetricCard>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Recent contacts</h3>
          <Link href="/contacts" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
            View all
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-100/70 dark:bg-slate-800/60">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Name
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Phone
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Opt-in
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Added
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-900 dark:bg-slate-900">
              {recentContacts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    No contacts yet. Add the first contact from the Contacts page.
                  </td>
                </tr>
              ) : (
                recentContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-300">
                      <Link href={`/contacts/${contact.id}`}>{formatName(contact.firstName, contact.lastName)}</Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{contact.phone}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {contact.optInStatus.replace(/_/g, ' ').toLowerCase()}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{formatDate(contact.createdAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children?: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
      {children && <div className="mt-2">{children}</div>}
    </article>
  );
}
