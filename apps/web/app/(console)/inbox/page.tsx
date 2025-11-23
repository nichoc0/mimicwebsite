import { FeaturePlaceholder } from '@/components/feature-placeholder';

export default function InboxPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-3xl font-semibold">Conversation inbox</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Reply to two-way SMS, inspect delivery receipts, and forward calls once Twilio webhooks are connected.
        </p>
      </header>

      <FeaturePlaceholder
        title="Messaging UI coming soon"
        description="This workspace will display threaded dialogs, STOP alerts, and call logs in real time."
      />
    </div>
  );
}
