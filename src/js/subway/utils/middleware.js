import { ROUTE } from '../constants/constants';

const allowURL = {
  [ROUTE.LINES]: true,
  [ROUTE.LINES]: true,
  [ROUTE.LINES]: true,
  [ROUTE.LINES]: true,
  [ROUTE.LINES]: true,
  [ROUTE.LINES]: true,
};

const privateURL = () => {
  if (!stateManager[STATE_KEY.IS_SIGNED].get()) {
    pushHistoryState(ROUTE.ROOT);
    return;
  }
};
