import {CouponContext} from "../../Contexts/CouponContext";
import {useContext} from "react";

export const Coupon = () => {
    const couponContext = useContext(CouponContext);
    const couponData = couponContext?.clickedCells;
    const totalAmount = couponData?.length ? couponData?.reduce(
        (accumulator, currentValue) => accumulator * Number(currentValue.rate),
        1
    ) : 0
    return (
        <>
            {couponData && couponData.length > 0 && couponData.map((row) => {
                return (
                    <div>
                        {`4. Kod ${row.code} Maç: ${row.name} Oran: ${row.rate}`}
                    </div>
                )
            })
            }

            <div>
                Toplam Tutar:{totalAmount.toFixed(2)} TL
            </div>
        </>
    )
}