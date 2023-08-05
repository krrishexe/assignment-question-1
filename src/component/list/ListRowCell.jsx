// import styles from "./ListRowCell.module.css";

// const ListRowCell = ({ children }) => {
//   const handleOnClick =(children)=>{
//     console.log(children.target)
//   }
//   return <td onClick={handleOnClick} className={styles.cell}>{children}</td>;
// };
// export default ListRowCell;

import SODContext from "../../context/selectedOrderDetails/SODContext";
import styles from "./ListRowCell.module.css";
import { useContext } from "react";

const ListRowCell = ({ children }) => {

  const { selectedOrderDetails, setSelectedOrderDetails } = useContext(SODContext);

  const handleOnClick =(children)=>{
    const s2={
      buySellIndicator: "BUYI",
      orderStatus: "NEWO",
      orderType: "Market"
  }
    // console.log(children.target)
    setSelectedOrderDetails(s2)
  }
  return <td onClick={handleOnClick} className={styles.cell}>{children}</td>;
};

export default ListRowCell;
