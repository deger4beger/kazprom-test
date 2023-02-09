import "./App.css"
import { useAppDispatch, useAppSelector } from "./redux"

function App() {

  const dispatch = useAppDispatch();
  const records = useAppSelector(state => state.recordReducer.data);

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
            <div>
              { record.text }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
