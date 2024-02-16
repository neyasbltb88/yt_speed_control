import EventEmitter from '@neyasbltb_88/event-emitter';
import PlaybackRateBtn from './PlaybackRateBtn';
import { reporter } from '@utils';

class PlaybackRateView extends EventEmitter {
    container = null;
    btn = null;
    value = null;

    constructor(value = 1) {
        super();
        this.value = value;
    }

    onPlus = () => {
        this.emit('plus');
    };
    onMinus = () => {
        this.emit('minus');
    };

    setValue = (value) => {
        if (value === this.value) return;

        this.value = value;
        if (!this.container) return;

        this.update();
    };

    init(container) {
        if (!container) {
            reporter.error('PlaybackRateView: При инициализации отсутствует контейнер');
            return;
        }

        this.container = container;
        let { value, onMinus, onPlus } = this;
        this.btn = PlaybackRateBtn({ value, onMinus, onPlus });
        this.container.insertAdjacentElement('afterbegin', this.btn);
    }
    update() {
        let oldBtn = this.btn;
        let { value, onMinus, onPlus } = this;
        this.btn = PlaybackRateBtn({ value, onMinus, onPlus });

        this.container.replaceChild(this.btn, oldBtn);
    }
    destroy() {
        if (!this.btn) {
            reporter.error('PlaybackRateView: При уничтожении отсутствует кнопка');
            return;
        }

        this.btn.remove();
    }
}

export default PlaybackRateView;
