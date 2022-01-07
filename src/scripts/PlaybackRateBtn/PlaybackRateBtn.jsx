import { dom } from '@utils';
import './PlaybackRateBtn.sass';
import chevron_left from "../../assets/chevron_left.svg";
import chevron_right from "../../assets/chevron_right.svg";

export const PlaybackRateBtn = (props) => {
    let { value, onMinus, onPlus } = props;

    return (
        <div className="PlaybackRateBtn ytp-button">
            <div className="PlaybackRateBtn-inner">
                <div className="PlaybackRateBtn-btn PlaybackRateBtn-minus" onclick={onMinus}>
                    <img className="PlaybackRateBtn-chevron" src={chevron_left}/>
                </div>
                <div className="PlaybackRateBtn-btn PlaybackRateBtn-plus" onclick={onPlus}>
                    <img className="PlaybackRateBtn-chevron" src={chevron_right}/>
                </div>
                <div className="PlaybackRateBtn-value">{value}</div>
            </div>
        </div>
    );
};
