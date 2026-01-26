import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { JobListing, CompanyInfo, LeadershipMember, Service, Solution, WhitePaper } from '@/backend';

// Company Info
export function useCompanyInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<CompanyInfo>({
    queryKey: ['companyInfo'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getCompanyInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

// Leadership Team
export function useLeadershipTeam() {
  const { actor, isFetching } = useActor();

  return useQuery<LeadershipMember[]>({
    queryKey: ['leadership'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getLeadershipTeam();
    },
    enabled: !!actor && !isFetching,
  });
}

// Services
export function useServices() {
  const { actor, isFetching } = useActor();

  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getServices();
    },
    enabled: !!actor && !isFetching,
  });
}

// Solutions
export function useSolutions() {
  const { actor, isFetching } = useActor();

  return useQuery<Solution[]>({
    queryKey: ['solutions'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getSolutions();
    },
    enabled: !!actor && !isFetching,
  });
}

// Job Listings
export function useJobListings() {
  const { actor, isFetching } = useActor();

  return useQuery<JobListing[]>({
    queryKey: ['jobs'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getJobListings();
    },
    enabled: !!actor && !isFetching,
  });
}

// Contact Submission
export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContact(data.name, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
}

// White Papers
export function useWhitePapers() {
  const { actor, isFetching } = useActor();

  return useQuery<WhitePaper[]>({
    queryKey: ['whitePapers'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getWhitePapers();
    },
    enabled: !!actor && !isFetching,
  });
}

// Increment Download Count
export function useIncrementDownloadCount() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (paperId: bigint | string) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.incrementDownloadCount(paperId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['whitePapers'] });
    },
  });
}
