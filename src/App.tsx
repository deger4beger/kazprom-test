import "./App.css"
import { useAppDispatch, useAppSelector } from "./redux"
import { createRecord } from "./redux/record";

function App() {

  const dispatch = useAppDispatch();
  const records = useAppSelector(state => state.recordReducer.data);

  const onCreateRecord = () => {
    const record = window.prompt("Введите текст записи");
    if (!record) return
    dispatch(createRecord({
      text: record
    }))
  }

  // const onDeleteRecord

  return (
    <div className="wrapper">
      <div className="buttons">
        <button className="button">
          Добавить
        </button>
        <button className="button">
          Удалить
        </button>
        <button className="button">
          Тест GraphQL
        </button>
      </div>
      <div className="records">
        {
          records.map(record =>
            <div className="record">
              { record.text }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
