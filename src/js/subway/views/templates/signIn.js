import { linkButton } from '../../../@shared/views/templates/linkButton';
import { MENU, MESSAGE, ROUTE } from '../../constants/constants';

export const signIn = `
  <div id="content" class="wrapper p-10 bg-white">
    <div class="heading">
      <h2>${MENU.SIGNIN}</h2>
    </div>
    <form id="signin-form" name="signin" class="form">
      <div class="input-control">
        <label for="email" class="input-label" hidden>이메일</label>
        <input
          type="email"
          id="signin-email"
          name="email"
          class="input-field"
          placeholder="이메일"
          required
        />
      </div>
      <div class="input-control">
        <label for="password" class="input-label" hidden
          >비밀번호</label
        >
        <input
          type="password"
          id="signin-password"
          name="password"
          class="input-field"
          placeholder="비밀번호"
        />
      </div>
      <div class="input-control w-100">
        <button
          type="submit"
          name="submit"
          class="input-submit w-100 bg-cyan-300"
        >
          확인
        </button>
      </div>
      <p class="text-gray-700 pl-2">
        ${MESSAGE.SIGNIN.INVITE}
        ${linkButton({ link: ROUTE.SIGNUP, text: MENU.SIGNUP })}
      </p>
    </form>
  </div>
`;
