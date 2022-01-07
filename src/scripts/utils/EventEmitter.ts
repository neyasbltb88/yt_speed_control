export type TEvents = { [key: string]: Set<Function> };

/**
 * @class
 * @classdesc Класс, реализующий логику работы с подпиской на события и их генерацию
 * с уведомлением всех функций-обработчиков соответствующего события
 */
class EventEmitter {
    protected events: TEvents = {};
    protected onceCallbacks: TEvents = {};
    protected eventsPrefix: string;
    protected autoPrefix: boolean;

    /**
     * @class
     * @param {string} [eventsPrefix=""] Префикс для имени всех генерируемых событий "eventsPrefix:eventName"
     * @param {boolean} [autoPrefix=false] Добавлять ли автоматически префикс
     * к именам событий при подписке и отписке от них.
     * При генерации события этот префикс всегда добавляется автоматически
     */
    constructor(eventsPrefix: string = '', autoPrefix: boolean = false) {
        this.eventsPrefix = eventsPrefix;
        this.autoPrefix = autoPrefix;
    }

    /**
     * @description Получить имя события с учетом условий добавления префикса к нему
     * @param {string} type Имя события
     * @param {boolean} usePrefix Добавлять ли к имени события префикс, если он есть
     */
    getEventName(type: string, usePrefix: boolean = this.autoPrefix): string {
        return this.eventsPrefix && usePrefix ? `${this.eventsPrefix}:${type}` : type;
    }

    /**
     * @description Метод подписки на события
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    on(type: string, callback: Function): any {
        let _type: string = this.getEventName(type);
        this.events[_type] = this.events[_type] || new Set();
        this.events[_type].add(callback);

        return this;
    }

    /**
     * @description Метод отписки от события
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    off(type: string, callback: Function): any {
        let _type: string = this.getEventName(type);
        if (!this.events[_type]) return this;

        this.events[_type].delete(callback);

        return this;
    }

    /**
     * @description Метод подписки на события.
     * С помощью этого метода можно установить только один обработчик на одно имя события {type}
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    one(type: string, callback: Function): any {
        let _type: string = this.getEventName(type);
        this.events[_type] = new Set([callback]);

        return this;
    }

    /**
     * @description Метод подписки на события.
     * С помощью этого метода можно установить обработчик, который вызовется только один раз
     * и автоматически отпишется от события после вызова
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    once(type: string, callback: Function): any {
        let _type: string = this.getEventName(type);

        this.events[_type] = this.events[_type] || new Set();
        this.events[_type].add(callback);

        this.onceCallbacks[_type] = this.onceCallbacks[_type] || new Set();
        this.onceCallbacks[_type].add(callback);

        return this;
    }

    /**
     * @description Метод генерации событий, запускающий оповещение всех функций-обработчиков события с именем {type}
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    emit(type: string, arg: any): any {
        let _type: string = this.getEventName(type, true);

        if (this.events[_type]) {
            this.events[_type].forEach((callback) => {
                callback(arg);

                if (this.onceCallbacks[_type]?.has?.(callback)) {
                    this.off(type, callback);
                    this.onceCallbacks[_type].delete(callback);
                }
            });
        }

        return this;
    }
}

export default EventEmitter;
