interface IBulletinTableHeader {
    itemCount: number;
}

export const BulletinTableHeader = ({itemCount}: IBulletinTableHeader) => (
    <div className="mainHeader">
        <div className="headerCell">Event Count: {itemCount}</div>
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