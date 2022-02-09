import { useFetchGoogleFontsQuery } from "../features/fonts/fontsSlice";
import { Select } from "antd";
const { Option } = Select;

function FontsSelect() {
  const { isSuccess, data } = useFetchGoogleFontsQuery<any>();

  function handleChange(value: string) {
    const selectedFont: any = data.items.filter(
      (item: any) => item.family === value
    );

    console.log(selectedFont);
  }

  return (
    <>
      {isSuccess && (
        <Select
          defaultValue={data?.items[0].family}
          style={{ width: 300 }}
          onChange={handleChange}
        >
          {data?.items.map((item: any) => (
            <Option key={item.family} value={item.family}>
              {item.family}
            </Option>
          ))}
        </Select>
      )}
    </>
  );
}

export default FontsSelect;
