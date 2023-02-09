import { useAppSelector } from "../redux";

const RecordsList = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (selected: string) => void;
}) => {
  const records = useAppSelector((state) => state.recordReducer.data);

  return (
    <ul className="records">
      {records.map((record) => (
        <li
          key={record.id}
          className={"record" + (record.id === selected ? " selected" : "")}
          onClick={() => setSelected(record.id)}
        >
          {record.text}
        </li>
      ))}
    </ul>
  );
};

export default RecordsList;
