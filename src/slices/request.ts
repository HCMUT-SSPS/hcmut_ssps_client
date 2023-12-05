import { StateCreator } from 'zustand';

import { Request } from '../typings/request';

export interface TRequestState {
  requestInfo: Request;
  step: number;
}

interface Config {
  campus: string;
  printer: string;
  date: string;
  time: string;
}

interface Details {
  pageRange: string;
  copies: number;
  orientation: string;
  paperSize: string;
  printSides: string;
  color: string;
}

export interface TRequestActions {
  setFileName: (document: string) => void;
  setStep: (step: number) => void;
  setConfig: (config: Config) => void;
  setDetails: (details: Details) => void;
  resetRequest: () => void;
}

export interface TRequestSlice extends TRequestState, TRequestActions {}

export const initialState = {
  step: 0,
  requestInfo: {
    date: '',
    time: '',
    printer: '',
    campus: 'Campus 1',
    paper: 0,
    document: '',
    pageRange: '',
    copies: 0,
    orientation: 'Portrait',
    paperSize: 'A4',
    printSides: 'Single-sided',
    color: 'Black & White',
    deliverDate: '',
    deliverTime: '',
    status: 'Waiting',
  },
};

export const RequestSlice: StateCreator<
  TRequestSlice,
  [['zustand/devtools', never]],
  [],
  TRequestSlice
> = (set) => ({
  ...initialState,
  setFileName: (document: string) => {
    set((state) => ({
      step: state.step,
      requestInfo: { ...state.requestInfo, document: document },
    }));
  },
  setStep: (step: number) => {
    set((state) => ({ ...state, step: step }));
  },
  setConfig: (config: Config) => {
    set((state) => ({
      step: state.step,
      requestInfo: {
        ...state.requestInfo,
        deliverDate: config.date,
        deliverTime: config.time,
        printer: config.printer,
        campus: config.campus,
      },
    }));
  },
  setDetails: (details: Details) => {
    set((state) => ({
      step: state.step,
      requestInfo: {
        ...state.requestInfo,
        pageRange: details.pageRange,
        copies: details.copies,
        orientation: details.orientation,
        paperSize: details.paperSize,
        printSides: details.printSides,
        color: details.color,
      },
    }));
  },
  resetRequest: () => {
    set(() => initialState);
  },
});
