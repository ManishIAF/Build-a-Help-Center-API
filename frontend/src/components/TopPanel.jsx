import '../styles/TopPanel.css';
import Search from './Search';

const TopPanel = ({setData,Data}) => {
    return (
        <div className="top-panel">
            <h1>How can we Help you ?</h1>
            <Search setData={setData} Data={Data} />
        </div>
    );
}

export default TopPanel;