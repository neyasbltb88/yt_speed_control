import YouTubePlayerController from './YouTubePlayerController';
import Controller from './Controller';

let youTubePlayerController = new YouTubePlayerController();
let controller = new Controller();

const init = () => {
    youTubePlayerController.init();
    controller.init(youTubePlayerController);
};
setTimeout(init, 2100);

// Код для горячего обновления модуля
if (module.hot) {
    module.hot.dispose(() => {
        youTubePlayerController.destroy();
        controller.destroy();
    });

    module.hot.accept();
}
