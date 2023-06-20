// Type Aliases
function handleResponse(response: { data: any; statusCode: number }) {
  // ...
  console.log(response);
}

function fetchData(): Promise<{ data: any; statusCode: number }> {
  // ...
  return Promise.resolve({ data: {}, statusCode: 200 });
}

async function processData() {
  const response = await fetchData();
  handleResponse(response);
}

processData();

// String Literal Types
type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  // ...
}
move("left");
