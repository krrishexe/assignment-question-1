import { useContext, useState } from "react";
import SODContext from "../context/selectedOrderDetails/SODContext";
import SOTContext from "../context/selectedOrderTimeStamps/SOTContext";

// Data
import mockData from "../assets/data.json";
// import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
import { Button } from "../stories/Button";
import { Large } from "../stories/Button.stories";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");

  const [dataFromChild, setDataFromChild] = useState(null);

  const {selectedOrderDetails} = useContext(SODContext)
  const {selectedOrderTimeStamps} = useContext(SOTContext)

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  console.log(dataFromChild);
  return (
    <div>
      <div className={styles.header}>

        {/* Solved ISSUE 1 */}

        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${mockData.header.returnedHits} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button primary size={Large} label={"Storybook"} />   

          {/* Added storybook to button component || Solved Bonus Issue  */}

          <Dropdown
            sendDataToParent={handleDataFromChild}
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} dataFromChild={dataFromChild} searchText={searchText} />
      </div>
    </div>
  );
};

export default Dashboard;
