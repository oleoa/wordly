export default function VirtualKeyboard(props) {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  let color = {};
  color["none"] = "rgba(0, 0, 0, 0)";
  color["green"] = "rgba(77, 170, 87)";
  color["yellow"] = "rgba(255, 200, 87)";
  return (
    <div className="px-4 pt-2 pb-4 rounded-lg border-2 text- border-white flex flex-col gap-2 bg-blur">
      <span>Mini-keyboard</span>
      {keyboard.map((keyboardRow) => (
        <div
          key={keyboard.indexOf(keyboardRow)}
          className="flex gap-2 items-center justify-center"
        >
          {keyboardRow.map((keyboardKey) => (
            <span
              key={keyboardKey}
              style={{
                backgroundColor:
                  props.virtualKeyboard[keyboardKey].state == "200"
                    ? color["green"]
                    : props.virtualKeyboard[keyboardKey].state == "100"
                      ? color["yellow"]
                      : props.virtualKeyboard[keyboardKey].state == "404"
                        ? color["none"]
                        : "",
                borderColor:
                  props.virtualKeyboard[keyboardKey].state == "404"
                    ? color["none"]
                    : "",
                color:
                  props.virtualKeyboard[keyboardKey].state == "404"
                    ? color["none"]
                    : "",
              }}
              className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center"
            >
              {keyboardKey}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
