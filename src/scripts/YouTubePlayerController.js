import { EventEmitter } from '@utils';

class YouTubePlayerController extends EventEmitter {
    /** html-элемент плеера, на который YouTube пробрасывает методы управления воспроизведением */
    #player = null;
    /** html-элемент контейнера кнопок управления плеером */
    #controls = null;

    constructor() {
        super();
    }

    get controls() {
        return this.#controls;
    }

    /** Метод получения массива чисел с допустимыми значениями скорости воспроизведения */
    getAvailablePlaybackRates() {
        return this.#player.getAvailablePlaybackRates();
    }
    /** Метод получения текущей скорости воспроизведения */
    getPlaybackRate() {
        return this.#player.getPlaybackRate();
    }
    /** Метод установки текущей скорости воспроизведения */
    setPlaybackRate(value) {
        this.#player.setPlaybackRate(value);
    }

    #onPlaybackRateChangeHandler = (value) => {
        this.emit('onPlaybackRateChange', value);
    };

    init() {
        let player = document.querySelector('#movie_player');
        let controls = player.querySelector('.ytp-right-controls');

        if (!player || !controls) {
            reporter.error('YouTubePlayerController: При инициализации отсутствуют необходимые данные', {
                player,
                controls
            });
            return;
        }
        this.#player = player;
        this.#controls = controls;

        this.#player.addEventListener('onPlaybackRateChange', this.#onPlaybackRateChangeHandler);
    }
    destroy() {
        this.#player.removeEventListener('onPlaybackRateChange', this.#onPlaybackRateChangeHandler);
        this.#player = null;
        this.#controls = null;
    }
}

export default YouTubePlayerController;
