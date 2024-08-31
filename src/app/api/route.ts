
export default async function GET(request: Request) {
  const res = await fetch('https://dummyjson.com/products');
  const json = await res.json();
  console.log(json);
  return json;
}
