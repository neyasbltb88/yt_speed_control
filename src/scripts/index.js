import PlaybackRateView from './PlaybackRateView';

let playbackRateView = new PlaybackRateView(1.25);

const init = () => {
    let controls = document.querySelector('.ytp-right-controls');
    playbackRateView.init(controls);
};
setTimeout(init, 0);

// Код для горячего обновления модуля
if (module.hot) {
    module.hot.dispose(() => {
        playbackRateView.destroy();
    });

    module.hot.accept();
}
