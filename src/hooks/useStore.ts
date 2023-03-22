import { useContext } from 'react';
import SyncStateReactContext from '../components/Context';
import { DocStore } from '@nicolaspanda/syncstate-core';

export function useStore() {
  const store: DocStore = useContext(SyncStateReactContext);

  return store;
}
