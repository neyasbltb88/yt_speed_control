import HotKeys from '@neyasbltb_88/hot-keys-controller';
import { reporter } from '@utils';

/**
 * @class
 * @description Контроллер сочетаний горячих клавиш для управления скоростью воспроизведения
 */
export default class HotKeysController {
    /** Инстанс контроллера горячих клавиш */
    #hotKeys = null;
    /** Инстанс основного контроллера скорости воспроизведения */
    #controller = null;
    /** Сочетания горячих клавиш, на которые будут срабатывать изменения скорости воспроизведения  */
    #actions = [
        {
            hotKey: 'CTRL+Comma',
            callback: () => this.onDecrement()
        },
        {
            hotKey: 'CTRL+Period',
            callback: () => this.onIncrement()
        }
    ];

    init(controller) {
        this.#controller = controller;
        this.#hotKeys = new HotKeys({ el: 'body', autoEnable: true, tabindex: true });

        this.#hotKeys.setActions(this.#actions);
    }
    destroy() {
        this.#hotKeys?.destroy?.();
        this.#hotKeys = null;
        this.#controller = null;
    }

    onDecrement() {
        if (!this.#controller) {
            reporter.error('HotKeysController onDecrement: Отсутствует controller');
            return;
        }

        this.#controller.decrementPlaybackRate();
    }
    onIncrement() {
        if (!this.#controller) {
            reporter.error('HotKeysController onIncrement: Отсутствует controller');
            return;
        }

        this.#controller.incrementPlaybackRate();
    }
}
