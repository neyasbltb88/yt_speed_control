import Model from './Model';
import PlaybackRateView from './PlaybackRateView';
import { reporter, isFalse } from '@utils';

class Controller {
    /** Модель, сохраняющая значения */
    model = new Model();
    /** html-элемент плеера, на который YouTube пробрасывает методы управления воспроизведением */
    player = null;
    /** html-элемент контейнера кнопок управления плеером */
    controls = null;
    /** Массив чисел с допустимыми значениями скорости воспроизведения */
    availablePlaybackRates = [];
    /** Класс, управляющий отображением кнопки изменения скорости воспроизведения */
    playbackRateView = new PlaybackRateView(this.playbackRateValue);

    /** Модель текущей скорости воспроизведения */
    get playbackRateValue() {
        return this.model.playbackRateValue;
    }
    set playbackRateValue(value) {
        if (value === this.model.playbackRateValue) return;

        this.model.playbackRateValue = value;
    }

    /**
     * @description Метод уменьшения скорости воспроизведения на один шаг.
     * @returns {number|undefined} Возвращает новую скорость, если доступно уменьшение.
     */
    decrementPlaybackRate = () => {
        let prevValue = this.getPrevPlaybackRateValue(this.playbackRateValue);
        if (isFalse(prevValue)) return;

        this.setPlaybackRateValue(prevValue);

        return prevValue;
    };
    /**
     * @description Метод увеличения скорости воспроизведения на один шаг.
     * @returns {number|undefined} Возвращает новую скорость, если доступно увеличение.
     */
    incrementPlaybackRate = () => {
        let nextValue = this.getNextPlaybackRateValue(this.playbackRateValue);
        if (isFalse(nextValue)) return;

        this.setPlaybackRateValue(nextValue);

        return nextValue;
    };
    /**
     * @description Устанавливает конкретное значение скорости воспроизведения.
     * @param {number} value Новое значение скорости. Должно быть одним из допустимых значений.
     * @returns {boolean} Возвращает флаг успешности установки новой скорости.
     */
    setPlaybackRateValue = (value) => {
        if (typeof value !== 'number') {
            reporter.error('Controller setPlaybackRateValue: Устанавливаемое значение должно быть числом');
            return false;
        }
        if (!this.availablePlaybackRates.includes(value)) {
            reporter.error(
                'Controller setPlaybackRateValue: Устанавливаемое значение должно быть одним из допустимых значений: ',
                this.availablePlaybackRates
            );
            return false;
        }

        this.playbackRateValue = value;
        this.playbackRateView.setValue(value);
        if (this.player.getPlaybackRate() !== value) {
            this.player.setPlaybackRate(value);
        }

        return true;
    };
    /**
     * @description Получает предыдущее значение скорости относительно переданного value.
     * @param {number} value Значение, относительно которого нужно получить предыдущее допустимое значение.
     * @returns {number|undefined} Возвращает предыдущее значение скорости, если оно есть.
     */
    getPrevPlaybackRateValue(value) {
        let index = this.availablePlaybackRates.findIndex((el) => el === value);
        if (isFalse(index)) return;

        let prevValue = this.availablePlaybackRates[index - 1];
        if (isFalse(prevValue)) return;

        return prevValue;
    }
    /**
     * @description Получает следующее значение скорости относительно переданного value.
     * @param {number} value Значение, относительно которого нужно получить следующее допустимое значение.
     * @returns {number|undefined} Возвращает следующее значение скорости, если оно есть.
     */
    getNextPlaybackRateValue(value) {
        let index = this.availablePlaybackRates.findIndex((el) => el === value);
        if (isFalse(index)) return;

        let nextValue = this.availablePlaybackRates[index + 1];
        if (isFalse(nextValue)) return;

        return nextValue;
    }
    /** Инициализация контроллера, может вызываться отложенно, после создания экземпляра этого класса */
    init() {
        let player = document.querySelector('#movie_player');
        let controls = document.querySelector('.ytp-right-controls');

        if (!player || !controls) {
            reporter.error('Controller: При инициализации отсутствуют необходимые данные', { player, controls });
            return;
        }
        this.player = player;
        this.controls = controls;

        this.availablePlaybackRates = this.player.getAvailablePlaybackRates();
        this.setPlaybackRateValue(this.playbackRateValue);
        this.player.addEventListener('onPlaybackRateChange', this.setPlaybackRateValue);

        this.playbackRateView.init(this.controls);
        this.playbackRateView.on('minus', this.decrementPlaybackRate);
        this.playbackRateView.on('plus', this.incrementPlaybackRate);
    }
    /** Деактивация контроллера */
    destroy() {
        this.player.removeEventListener('onPlaybackRateChange', this.setPlaybackRateValue);

        this.playbackRateView.off('minus', this.decrementPlaybackRate);
        this.playbackRateView.off('plus', this.incrementPlaybackRate);
        this.playbackRateView.destroy();

        this.player = null;
        this.controls = null;
        this.availablePlaybackRates = [];
    }
}

export default Controller;
