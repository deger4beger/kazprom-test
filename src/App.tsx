import { useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux";
import { createRecord } from "./redux/record";

function App() {
  const [selected, setSelected] = useState("");
  const records = useAppSelector((state) => state.recordReducer.data);
  const dispatch = useAppDispatch();

  const onCreateRecord = () => {
    const record = window.prompt("Введите текст записи");
    if (!record) return;
    dispatch(
      createRecord({
        text: record,
      })
    );
  };

  const onSetSelected = (id: string) =>
    selected === id ? setSelected("") : setSelected(id);

  // const onDeleteRecord

  return (
    <div className="wrapper">
      <div className="buttons">
        <button className="button" onClick={onCreateRecord}>
          Добавить
        </button>
        <button className="button">Удалить</button>
        <button className="button">Тест GraphQL</button>
      </div>
      <div className="records">
        {records.map((record) => (
          <div
            key={record.id}
            className={"record" + (record.id === selected ? " selected" : "")}
            onClick={() => onSetSelected(record.id)}
          >
            {record.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
