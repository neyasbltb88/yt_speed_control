import YouTubePlayerController from './YouTubePlayerController';
import Controller from './Controller';
import HotKeysController from './HotKeysController';

let youTubePlayerController = new YouTubePlayerController();
let controller = new Controller();
let hotKeysController = new HotKeysController();

const init = () => {
    youTubePlayerController.init();
    controller.init(youTubePlayerController);
    hotKeysController.init(controller);
};
setTimeout(init, 2100);

// Код для горячего обновления модуля
if (module.hot) {
    module.hot.dispose(() => {
        youTubePlayerController.destroy();
        controller.destroy();
        hotKeysController.destroy();
    });

    module.hot.accept();
}
