import { create, StoreApi, UseBoundStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import { RequestSlice, TRequestSlice, initialState as requestInitialState } from './slices/request';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export interface TCommonActions {
  logout: () => void;
}

const useBoundStoreBase = create<TRequestSlice & TCommonActions>()(
  devtools((...a) => ({
    ...RequestSlice(...a),
    logout: () => {
      localStorage.clear();
      a[0]({ ...requestInitialState });
    },
  }))
);

const useBoundStore = createSelectors(useBoundStoreBase);

export default useBoundStore;
