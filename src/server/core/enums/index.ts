export enum TaskState {
  INIT = 'INIT',
  ING = 'ING',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export enum TaskType {
  BUILD = 'BUILD',
  DEV = 'DEV',
  TEST = 'TEST',
  LINT = 'LINT',
}

export enum TaskEventType {
  STD_OUT_DATA = 'STD_OUT_DATA',
  STD_ERR_DATA = 'STD_ERR_DATA',
  STATE_EVENT = 'STATE_EVENT',
}

export enum LogType {
  STD_OUT = 'STD_OUT',
  STD_ERR = 'STD_ERR',
}
