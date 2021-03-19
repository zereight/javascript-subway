import { MENU } from '../../constants/constants';

export const lineAddModal = `
<div class="modal">
  <div class="modal-inner p-8">
    <button class="modal-close">
      <svg viewbox="0 0 40 40">
        <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
    </button>
    <header>
      <h2 class="text-center">${MENU.LINES_MODAL}</h2>
    </header>
    <form>
      <div class="input-control">
        <label for="subway-line-name" class="input-label" hidden>노선 이름</label>
        <input
          type="text"
          id="subway-line-name"
          name="subway-line-name"
          class="input-field"
          placeholder="노선 이름"
          required
        />
      </div>
      <div class="input-control">
        <label for="departure-time" class="input-label" hidden>첫차 시간</label>
        <input
          type="text"
          id="departure-time"
          name="departure-time"
          class="input-field"
          placeholder="첫차시간 HH:MM"
          required
        />
        <label for="departure-time" class="input-label" hidden>막차 시간</label>
        <input
          type="text"
          id="arrival-time"
          name="arrival-time"
          class="input-field mx-2"
          placeholder="막차 시간 HH:MM"
          required
        />
        <label for="interval-time" class="input-label" hidden>간격 시간</label>
        <input
          type="text"
          id="interval-time"
          name="arrival-time"
          class="input-field"
          placeholder="간격"
          required
        />
      </div>
      <div class="input-control">
        <div>
          <label for="subway-line-color" class="input-label" hidden>간격 시간</label>
          <input
            type="text"
            id="subway-line-color"
            name="subway-line-color"
            class="input-field"
            placeholder="색상을 아래에서 선택해주세요."
            disabled
            required
          />
        </div>
      </div>
      <div class="subway-line-color-selector px-2"></div>
      <div class="d-flex justify-end mt-3">
        <button type="submit" name="submit" class="input-submit bg-cyan-300">확인</button>
      </div>
    </form>
  </div>
</div>
`;
