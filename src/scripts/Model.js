import SegregateLocalStorage from 'segregate-local-storage';

const defaultValue = {
    playbackRateValue: 1
};

class Model {
    storage = new SegregateLocalStorage('yt_speed_control', defaultValue, true);

    get playbackRateValue() {
        return this.getPlaybackRateValue();
    }
    set playbackRateValue(value) {
        this.setPlaybackRateValue(value);
    }

    getPlaybackRateValue() {
        return this.storage.get('playbackRateValue');
    }
    setPlaybackRateValue(value) {
        this.storage.set('playbackRateValue', value);
    }
}

export default Model;
