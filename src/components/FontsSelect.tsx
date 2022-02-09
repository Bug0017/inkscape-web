import { useLayoutEffect } from "react";
import { useFetchGoogleFontsQuery } from "../features/fonts/googleFontsSlice";
import { Select } from "antd";
import { addFontToDocument } from "../helper";
import { useAppDispatch } from "../state/hooks";
import { setFontName } from "../features/fonts/fontsSlice";
const { Option } = Select;

function FontsSelect() {
  const dispatch = useAppDispatch();
  const { isSuccess, data } = useFetchGoogleFontsQuery<any>();
  useLayoutEffect(() => {
    if (isSuccess) {
      const font: any = data.items[0];
      addFontToDocument(font);
      dispatch(setFontName(font.family));
    }
  }, [data]);

  function handleChange(value: string) {
    const font: any = data.items.filter(
      (item: any) => item.family === value
    )[0];

    addFontToDocument(font);
    dispatch(setFontName(font.family));
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
