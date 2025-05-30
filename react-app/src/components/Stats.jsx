function Stats({stats}){
    
    return(
        <div className="stats">
            <div className="title">STATS</div>
            <ul className= "items">
                <li className="item">
                    • {stats.applied} APPLIED
                </li>
                <li className="item">
                    • {stats.responded} RESPONDED
                </li>
                <li className="item">
                    • {stats.rejected} REJECTED
                </li>
                <li className="item">
                    • {stats.interviewing} INTERVIEWING
                </li>
                <li className="item">
                    • {stats.offer} OFFER
                </li>
            </ul>
        </div>
    );
}

export default Stats;

