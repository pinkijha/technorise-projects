import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const candidateDetailIDAtom = atom({
  key: 'candidateDetailID',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export const allCandidateDataAtom = atom({
  key: 'allCandidateDetails',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const submittedCandidateAtom = atom({
  key: 'submittedCandidate',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const allCandidatesCountAtom = atom({
  key: 'candidatesCount',
  default: null
});

export const candidateVisitAtom = atom({
  key: 'candidateVisit',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const candidateCenterCountAtom = atom({
  key: 'candidateCenterCount',
  default: [],
  effects_UNSTABLE: [persistAtom]
});
