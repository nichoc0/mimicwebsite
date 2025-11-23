import type {
  ComplianceEventRecord,
  ComplianceSummary,
  Contact,
  CreateContactPayload,
  HealthHeartbeat,
  MediaAssetRecord,
  WorkflowOverview,
  WorkflowRun,
} from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';

type FetchResult<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

async function fetchJson<T>(path: string, init?: RequestInit): Promise<FetchResult<T>> {
  const url = `${API_BASE_URL}${path}`;

  try {
    const response = await fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const message = await response.text();
      return {
        data: null,
        error: message || `Request failed with status ${response.status}`,
        status: response.status,
      };
    }

    if (response.status === 204) {
      return {
        data: null,
        error: null,
        status: response.status,
      };
    }

    const json = (await response.json()) as T;
    return { data: json, error: null, status: response.status };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return {
      data: null,
      error: message,
      status: 500,
    };
  }
}

function pruneEmptyValues<T extends object>(input: T) {
  const entries = Object.entries(input as Record<string, unknown>).filter(([, value]) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }

    return value !== undefined && value !== null && value !== '';
  });

  return Object.fromEntries(entries) as Partial<T>;
}

export async function getContacts(): Promise<FetchResult<Contact[]>> {
  const result = await fetchJson<Contact[]>('/contacts');

  return {
    data: result.data ?? [],
    error: result.error,
    status: result.status,
  };
}

export async function getContact(id: string): Promise<FetchResult<Contact | null>> {
  const result = await fetchJson<Contact>(`/contacts/${id}`);

  return {
    ...result,
    data: result.data,
  };
}

export async function createContact(payload: CreateContactPayload): Promise<FetchResult<Contact>> {
  const body = JSON.stringify(pruneEmptyValues(payload));
  return fetchJson<Contact>('/contacts', {
    method: 'POST',
    body,
  });
}

export async function getWorkflowOverview(): Promise<FetchResult<WorkflowOverview>> {
  return fetchJson<WorkflowOverview>('/workflows/overview');
}

export async function getWorkflowRuns(limit = 20): Promise<FetchResult<WorkflowRun[]>> {
  const result = await fetchJson<WorkflowRun[]>(`/workflows/runs?limit=${limit}`);

  return {
    data: result.data ?? [],
    error: result.error,
    status: result.status,
  };
}

export async function retryWorkflowRun(runId: string) {
  return fetchJson<{ runId: string; workflowKey: string; contactId: string }>(
    `/workflows/runs/${runId}/retry`,
    {
      method: 'POST',
    },
  );
}

export async function getMediaAssets(limit = 50): Promise<FetchResult<MediaAssetRecord[]>> {
  const result = await fetchJson<MediaAssetRecord[]>(`/media?limit=${limit}`);

  return {
    data: result.data ?? [],
    error: result.error,
    status: result.status,
  };
}

export async function getComplianceEvents(limit = 50): Promise<FetchResult<ComplianceEventRecord[]>> {
  const result = await fetchJson<ComplianceEventRecord[]>(`/compliance/events?limit=${limit}`);

  return {
    data: result.data ?? [],
    error: result.error,
    status: result.status,
  };
}

export async function getComplianceSummary(): Promise<FetchResult<ComplianceSummary>> {
  return fetchJson<ComplianceSummary>('/compliance/summary');
}

export async function getHealthHeartbeat(): Promise<FetchResult<HealthHeartbeat>> {
  return fetchJson<HealthHeartbeat>('/health');
}
