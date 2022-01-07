import { reporter } from '@utils';
import PlaybackRateBtn from './PlaybackRateBtn';

class PlaybackRateView {
    container = null;
    btn = null;
    value = null;

    constructor(value) {
        this.value = value;
    }

    onPlus = () => {
        console.log('onPlus');
    };
    onMinus = () => {
        console.log('onMinus');
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
    destroy() {
        if (!this.btn) {
            reporter.error('PlaybackRateView: При уничтожении отсутствует кнопка');
            return;
        }

        this.btn.remove();
    }
}

export default PlaybackRateView;
