import {FC, memo} from "react";
import {IBets} from "../../../Contexts/CouponContext";

interface HeaderProps {
    index: number;
    data: IBets;
}

export const RowHeader: FC<HeaderProps> = memo(({data}: any) => {
    return (
        <div className="headerRow">
            <div className="headerCell">{data.DAY}, {data.D}, {data.LN}</div>
            <div className="headerCell">Yorumlar</div>
            <div className="headerCell"></div>
            <div className="headerCell">1</div>
            <div className="headerCell">x</div>
            <div className="headerCell">2</div>
            <div className="headerCell">Alt</div>
            <div className="headerCell">Üst</div>
            <div className="headerCell">H1</div>
            <div className="headerCell">1</div>
            <div className="headerCell">x</div>
            <div className="headerCell">2</div>
            <div className="headerCell">H-2</div>
            <div className="headerCell">1-X</div>
            <div className="headerCell">1-2</div>
            <div className="headerCell">2-X</div>
            <div className="headerCell">X-2</div>
            <div className="headerCell">Var</div>
            <div className="headerCell">Yok</div>
            <div className="headerCell">+99</div>
        </div>
    );
});