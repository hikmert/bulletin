import React, {createContext, ReactNode, useState} from "react";

type CouponContextType = {
    clickedCells: OddData[],
    setClickedCell: (cell: OddData) => void
};

export interface OddData {
    rate: string;
    name: string;
    code: string;
}

export interface IBets {
    C: string;
    N: string;
    TYPE: string;
    NID: string;
    D: string;
    T: string;
    DAY: string;
    S: string;
    LN: string;
    IMF: boolean;
    OCG: {
        [key: string]: {
            ID: string;
            N: string;
            MBS: string;
            SO: number;
            OC: {
                [key: string]: {
                    ID: string;
                    O: string;
                    N: string;
                    MBS: string;
                    G: string;
                    OD: number;
                    IMF: boolean;
                }
            }
        }
    }
    HEC: boolean;
}

export const CouponContext = createContext<CouponContextType | undefined>({} as CouponContextType);

type CouponProviderProps = {
    children: ReactNode;
};

export const CouponProvider: React.FC<CouponProviderProps> = ({children}) => {
    const [clickedCells, setClickedCells] = useState<OddData[]>([]);
    const setClickedCell = (cell: OddData) => {
        const match = clickedCells.find(prevCell => prevCell.code === cell.code)
        if (match) {
            setClickedCells(clickedCells.filter(cell => cell.code !== match.code))
            return;
        }
        setClickedCells((prevClickedCells) => [...prevClickedCells, cell]);
    };
    return (
        <CouponContext.Provider value={{clickedCells, setClickedCell}}>
            {children}
        </CouponContext.Provider>
    );
};
