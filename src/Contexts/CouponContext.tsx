import React, {createContext, ReactNode, useState} from "react";

type CouponContextType = {
    clickedCells: OddData[],
    setClickedCell: (cell: OddData) => void
};

export interface OddData {
    rate: string;
    name: string;
    code: string;
    betId: string
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
        const rowMatched = clickedCells.find(prevCell => prevCell.code === cell.code)
        if (rowMatched) {
            if(rowMatched.betId === cell.betId) {
                const newCells = clickedCells.filter(cell => cell.code !== rowMatched.code)
                setClickedCells(newCells);
                return;
            }else{
                const newCells = clickedCells.filter(cell => cell.betId !== rowMatched.betId)
                setClickedCells((prevClickedCells) => [...newCells, cell]);
                return;
            }
        }else{
        setClickedCells((prevClickedCells) => [...prevClickedCells, cell]);
    };
    };
    return (
        <CouponContext.Provider value={{clickedCells, setClickedCell}}>
            {children}
        </CouponContext.Provider>
    );
};
