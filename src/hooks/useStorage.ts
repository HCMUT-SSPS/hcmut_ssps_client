import { Dispatch, SetStateAction } from 'react';
import { useLocalStorage, useSessionStorage } from '@uidotdev/usehooks';

export function useStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [localValue, setLocalValue] = useLocalStorage(key, initialValue);
  const [sessionValue, setSessionValue] = useSessionStorage(key, initialValue);

  if (localValue !== initialValue) {
    return [localValue, setLocalValue];
  }
  if (sessionValue !== initialValue) {
    return [sessionValue, setSessionValue];
  }
  return [initialValue, setLocalValue];
}
