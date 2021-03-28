import { STATE_KEY, ROUTE, SESSION_KEY, DOM } from '../constants';
import { store } from '../../@shared/models/store';
import { setToSessionStorage, removeFromSessionStorage } from '../../@shared/utils';
import { routeTo, userAuthAPI } from '../utils';

export class UserAuth {
  constructor(props) {
    this.props = props;
    this.setup();
    this.bindEvent();
  }

  setup() {
    store[STATE_KEY.SIGNED_USER].subscribe(this.signOut.bind(this));
  }

  signOut() {
    if (store[STATE_KEY.SIGNED_USER].get()) return;
    removeFromSessionStorage(SESSION_KEY.ACCESS_TOKEN);
    this.props.cache.stations = [];
    this.props.cache.lines = [];
  }

  bindEvent() {
    DOM.USER_AUTH.MAIN.FORM.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const { accessToken } = await userAuthAPI.signIn(this.$$input);
      const userName = await userAuthAPI.getUserName(accessToken);

      setToSessionStorage(SESSION_KEY.ACCESS_TOKEN, accessToken);
      DOM.USER_AUTH.MAIN.FORM.reset();
      DOM.USER_AUTH.MAIN.PASSWORD_MSG.classList.add('hidden');
      store[STATE_KEY.SIGNED_USER_NAME].set(userName);
      routeTo(ROUTE.ROOT);
    } catch (error) {
      console.error(error.message);
      DOM.USER_AUTH.MAIN.PASSWORD_MSG.classList.remove('hidden');
      DOM.USER_AUTH.MAIN.PASSWORD_INPUT.value = '';
      DOM.USER_AUTH.MAIN.PASSWORD_INPUT.focus();
    }
  }
}
