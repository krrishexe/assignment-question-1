import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, dataFromChild, searchText }) => {

  const currency = dataFromChild;

  if (searchText === "") {
    return (
      <table className={styles.container}>
        <thead>
          <ListHeader>
            <ListHeaderCell>Order ID</ListHeaderCell>
            <ListHeaderCell>Buy/Sell</ListHeaderCell>
            <ListHeaderCell>Country</ListHeaderCell>
            <ListHeaderCell>Order Submitted</ListHeaderCell>
            <ListHeaderCell>Order Volume / USD</ListHeaderCell>
          </ListHeader>
        </thead>
        <tbody>
          {rows.map((row) => (
            <ListRow>
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              {/* Solved Second Issue -> Was not showing OrderSubmitted date */}
              <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
              {/* Solved Third Issue -> by accessing the elements of json using diffrent syntax */}
              <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
            </ListRow>
          ))}
        </tbody>
      </table>
    );
  }
  // Solved Fourth Issue -> Added search functionality.
  else{
    const filtredRow = []
    for(let i=0 ; i<rows.length ; i++){
      if(searchText === rows[i]["&id"]){
        filtredRow.push(rows[i]);
      }
      // console.log(filtredRow)
    }
    return (
      <table className={styles.container}>
        <thead>
          <ListHeader>
            <ListHeaderCell>Order ID</ListHeaderCell>
            <ListHeaderCell>Buy/Sell</ListHeaderCell>
            <ListHeaderCell>Country</ListHeaderCell>
            <ListHeaderCell>Order Submitted</ListHeaderCell>
            <ListHeaderCell>Order Volume / USD</ListHeaderCell>
          </ListHeader>
        </thead>
        <tbody>
          {filtredRow.map((row) => (
            <ListRow>
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
              <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
            </ListRow>
          ))}
        </tbody>
      </table>
    );
  }

};

export default List;
