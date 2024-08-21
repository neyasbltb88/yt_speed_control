import YouTubePlayerController from './YouTubePlayerController';
import Controller from './Controller';
import HotKeysController from './HotKeysController';

let youTubePlayerController = new YouTubePlayerController();
let controller = new Controller();
let hotKeysController = new HotKeysController();

let interval;

const init = () => {
    interval = setInterval(() => {
        const result = youTubePlayerController.init();
        if (!result) return;

        // После успешной вставки кнопки останавливаем интервал
        clearInterval(interval);
        controller.init(youTubePlayerController);
        hotKeysController.init(controller);
    }, 100);
};

init();

// Код для горячего обновления модуля
if (module.hot) {
    module.hot.dispose(() => {
        if (interval) clearInterval(interval);

        youTubePlayerController.destroy();
        controller.destroy();
        hotKeysController.destroy();
    });

    module.hot.accept();
}
