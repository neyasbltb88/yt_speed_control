/**
 * @description Проверяет полученное значение на ложность.
 * При этом 0 не считается за ложное значение.
 * Нужно для проверки различных индексов, где 0 - допустимое значение, но его нужно отсеять от undefined, например
 * @param {any} value Проверяемое значение.
 * @returns {boolean} Возвращает true, если значение было false | null | undefined | "", иначе false
 */
const isFalse = (value: any): boolean => {
    return value === false || value === null || value === undefined || value === '';
};

export default isFalse;
