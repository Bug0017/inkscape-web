import { Select } from "antd";

const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

function App() {
  return (
    <div className="App">
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
}

export default App;
