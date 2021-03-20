import { stateManager } from '../../@shared/models/StateManager';
import { ROUTE, STATE_KEY } from '../constants/constants';

export const pushHistoryState = path => {
  history.pushState({ path }, null, path);
};
