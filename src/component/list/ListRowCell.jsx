import SODContext from "../../context/selectedOrderDetails/SODContext";
import SOTContext from "../../context/selectedOrderTimeStamps/SOTContext";
import styles from "./ListRowCell.module.css";
import { useContext } from "react";

const ListRowCell = ({ children , props }) => {

  // Solved Sixth issue - > populating the card on top of the listing component. (using contextApi)

  const { selectedOrderDetails, setSelectedOrderDetails } = useContext(SODContext);
  const { selectedOrderTimeStamps, setSelectedOrderTimeStamps } = useContext(SOTContext);

  const handleOnClick =(children)=>{
    
    const s1={
      buySellIndicator: "BUYI",
      orderStatus: "NEWO",
      orderType: "Market"
    }

    // console.log(children.target)

    const s2={
      orderReceived: "2022-11-04T15:29:00Z",
      orderStatusUpdated: "2022-11-04T15:29:00Z",
      orderSubmitted: "2022-11-04T15:29:00Z"
    }
    setSelectedOrderDetails(s1)
    setSelectedOrderTimeStamps(s2)
  }
  return <td onClick={handleOnClick} className={styles.cell}>{children}</td>;
};

export default ListRowCell;
