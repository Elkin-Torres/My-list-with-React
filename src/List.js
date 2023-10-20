import './List.css';
import {AiOutlineOrderedList} from "react-icons/ai";
import PrintList from "./components/printList.js";

function List() {
  
  return (
    <div className="list">
      <ul className='list__circles'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>
      <div className='list__container'>
      <div className='list__title'>
        <h1>My list...</h1>
        <AiOutlineOrderedList className='list__img' />
      </div>
      <PrintList />
      </div>

    </div>
  );
}

export default List;
