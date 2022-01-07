import Controller from './Controller';

let controller = new Controller();
window.controller = controller;

const init = () => {
    controller.init();
};
setTimeout(init, 0);

// Код для горячего обновления модуля
if (module.hot) {
    module.hot.dispose(() => {
        controller.destroy();
    });

    module.hot.accept();
}
