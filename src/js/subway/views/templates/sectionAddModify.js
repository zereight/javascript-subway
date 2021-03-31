import { SELECTOR } from '../../constants';

export const sectionAddModify = `
  <div id="modal-content" class="modal-inner p-8">
    <button class="modal-close">
      <svg viewbox="0 0 40 40">
        <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
    </button>
    <header>
      <h2 class="text-center">정보 입력</h2>
    </header>
    <form id="${SELECTOR.SECTION.MODAL.FORM}">
      <div class="d-flex justify-center items-center mb-3">
      <input
          type="text"
          id="${SELECTOR.SECTION.MODAL.LINE_NAME}"
          class="input-field text-center"
          disabled
        />
      </div>
      <div class="${SELECTOR.SECTION.MODAL.NON_MODIFIABLE} d-flex items-center input-control">
        <select id="${SELECTOR.SECTION.MODAL.UP_STATION_SELECTOR}">
        </select>
        <div class="d-inline-block mx-3 text-2xl">➡️</div>
        <select id="${SELECTOR.SECTION.MODAL.DOWN_STATION_SELECTOR}">
        </select>
      </div>
      <div class="input-control">
        <label for="${SELECTOR.SECTION.MODAL.DISTANCE_INPUT}" class="input-label" hidden>상행 하행역 거리</label>
        <input
          type="number"
          id="${SELECTOR.SECTION.MODAL.DISTANCE_INPUT}"
          name="distance"
          class="input-field mr-2"
          placeholder="상행 하행역 거리 (km)"
        />
        <label for="${SELECTOR.SECTION.MODAL.DURATION_INPUT}" class="input-label" hidden>상행 하행역 시간</label>
        <input
          type="number"
          id="${SELECTOR.SECTION.MODAL.DURATION_INPUT}"
          name="duration"
          class="input-field"
          placeholder="상행 하행역 시간 (분)"
        />
    </div>
    <div
      id="${SELECTOR.SECTION.MODAL.MSG}"
      class="js-message-box message-box mt-1 text-red mb-1 text-center"
      >
    </div>
      <div class="d-flex justify-end mt-3">
        <button id="${SELECTOR.SECTION.MODAL.SUBMIT_BUTTON}" type="submit" name="submit" class="input-submit bg-cyan-300">확인</button>
      </div>
    </form>
  </div>
`;
