import Model from './Model';
import PlaybackRateView from './PlaybackRateView';
import { reporter, isFalse } from '@utils';

class Controller {
    /** Модель, сохраняющая значения */
    #model = new Model();
    /** Контроллер, связывающий этот класс с плеером */
    #player = null;
    /** Класс, управляющий отображением кнопки изменения скорости воспроизведения */
    #playbackRateView = new PlaybackRateView(this.playbackRateValue);
    /** Значение текущей скорости воспроизведения */
    get playbackRateValue() {
        return this.#model.playbackRateValue;
    }
    /** Массив чисел с допустимыми значениями скорости воспроизведения */
    get availablePlaybackRates() {
        return this.#player.getAvailablePlaybackRates();
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

        this.#model.playbackRateValue = value;
        this.#playbackRateView.setValue(value);
        if (this.#player.getPlaybackRate() !== value) {
            this.#player.setPlaybackRate(value);
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
    init(player) {
        if (!player) {
            reporter.error('Controller: При инициализации отсутствует контроллер плеера');
            return;
        }
        this.#player = player;
        this.setPlaybackRateValue(this.playbackRateValue);
        this.#player.on('onPlaybackRateChange', this.setPlaybackRateValue);

        this.#playbackRateView.init(this.#player.controls);
        this.#playbackRateView.on('minus', this.decrementPlaybackRate);
        this.#playbackRateView.on('plus', this.incrementPlaybackRate);
    }
    /** Деактивация контроллера */
    destroy() {
        this.#player.off('onPlaybackRateChange', this.setPlaybackRateValue);

        this.#playbackRateView.off('minus', this.decrementPlaybackRate);
        this.#playbackRateView.off('plus', this.incrementPlaybackRate);
        this.#playbackRateView.destroy();

        this.#player = null;
    }
}

export default Controller;
