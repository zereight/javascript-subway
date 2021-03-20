import { ROUTE, STATE_KEY } from '../constants/constants';
import { contentElements } from '../views';
import { $ } from '../../@shared/utils';
import { isValidEmail, isValidPassword, setCookie, SHA256 } from '../utils';
import { stateManager } from '../../@shared/models/StateManager';
export class UserAuth {
  constructor() {
    this.$target = contentElements[ROUTE.SIGNIN];
    this.selectDOM();
    this.bindEvent();
  }

  selectDOM() {
    this.$signInForm = $('#signin-form', this.$target);
    this.$$input = {
      $email: $('#signin-email', this.$target),
      $password: $('#signin-password', this.$target),
    };
  }

  bindEvent() {
    this.$signInForm.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    try {
      this.requestLogin();
    } catch (error) {
      alert(error.message);
    }
  }

  async requestLogin() {
    console.log(SHA256(this.$$input.$password.value));
    const res = await fetch('http://15.164.230.130:8080/login/token', {
      method: 'POST',
      integrity: 'sha256-abcdef',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.$$input.$email.value,
        password: SHA256(this.$$input.$password.value),
      }),
    });
    console.log(res);

    switch (res.status) {
      case 200:
        const { accessToken } = await res.json();
        setCookie('accessToken', accessToken, 3);
        this.$$input.$email.value = '';
        this.$$input.$password.value = '';
        history.pushState({ path: ROUTE.ROOT }, null, ROUTE.ROOT);
        stateManager[STATE_KEY.ROUTE].set(ROUTE.ROOT);
        stateManager[STATE_KEY.IS_SIGNED].set(true);
        break;
      case 400:
        throw new Error(`로그인 실패`);
      default:
        throw new Error(`알 수 없는 오류`);
    }
  }
}
