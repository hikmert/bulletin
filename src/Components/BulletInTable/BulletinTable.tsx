import {FC, useEffect, useState} from "react";
import {FixedSizeList as List} from 'react-window';
import {Row} from "./Row/BulletinTableRow";
import {IBets} from "../../Contexts/CouponContext";
import {BulletinTableHeader} from "./BulletinTableHeader";

const END_POINT = 'https://nesine-case-study.onrender.com/bets'
export const BulletinTable: FC = () => {
    const [data, setData] = useState<IBets[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(END_POINT)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(() => alert("Data couldn't be fetched"))
            .finally(() => setLoading(false))

    }, []);

    return (
        <>
            {loading ? <div> Loading...</div> : (
                <>
                    <BulletinTableHeader itemCount={data.length}/>
                    <List
                        height={600}
                        itemCount={data.length}
                        itemSize={45}
                        width={'100%'}
                        itemData={data}
                    >
                        {Row}
                    </List>
                </>
            )}
        </>
    );
};