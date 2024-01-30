export async function getTodos() {
  const response = await fetch("http://localhost:3003/todos");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Bir hata meydana geldi");
  }
}
