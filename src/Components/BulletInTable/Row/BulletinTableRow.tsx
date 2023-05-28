import {IBets} from "../../../Contexts/CouponContext";
import {DetailsRow} from "./DetailsRow";
import {RowHeader} from "./RowHeader";

interface RowProps {
    index: number;
    style: any;
    data: IBets[];
}

export const Row = ({index, style, data}: RowProps) => {
    const item = data[index];

    return (
        <div style={style} className="rowContainer">
            <RowHeader index={index} data={item}/>
            <DetailsRow data={item} index={index}/>
        </div>
    );
};

