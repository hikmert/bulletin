import {FC, memo, useContext} from "react";
import {CouponContext, IBets} from "../../../Contexts/CouponContext";

interface DetailsProps {
    data: IBets;
    index: number;
}

interface DetailsRowProps {
    index: number;
    data: IBets;
}

export const DetailsRow: FC<DetailsProps> = memo(({index, data}: DetailsRowProps) => {
    const ocgValues = Object.values(data.OCG);
    const cellClickContext = useContext(CouponContext);
    const setClickedCell = cellClickContext?.setClickedCell;
    const couponContext = useContext(CouponContext);
    const couponData = couponContext?.clickedCells;

    const handleCellClick = (ocItem: any) => {
        if (setClickedCell) {
            setClickedCell({
                name: data.N,
                code: data.C,
                rate: ocItem.O,
                betId: ocItem.ID
            });
        }

    };

    return (
        <div className="dataRow">
            <div className="cell">
                {index + 1}, {data.T}, {data.N}
            </div>
            <div className="cell">Yorumlar</div>
            <div className="cell">{ocgValues[0].MBS}</div>
            <div className="cell">{ocgValues[1].OC[1]?.O}</div>
            {ocgValues.flatMap((ocgItem) =>
                Object.entries(ocgItem.OC).map(([ocKey, ocItem]) => (
                    <div
                        key={`${ocKey}-${ocItem.ID}`} // Assign a unique key to each child element
                        className="cell"
                        onClick={() => handleCellClick(ocItem)}
                        style={couponData?.find((cell) => cell.code === data.C && cell.betId === ocItem.ID) ? {backgroundColor: "yellow"} : {}}
                    >
                        {ocItem.O}
                    </div>
                ))
            )}
        </div>
    );
});
