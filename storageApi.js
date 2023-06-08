export const getApi = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  if (data === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  console.log("get완료!", data);
};

export const postApi = (newContent) => {
  let data = JSON.parse(localStorage.getItem("data"));
  const createId = () => {
    const idDate =
      `${date.getFullYear()}` +
      `${date.getMonth() + 1}` +
      `${date.getDate()}` +
      `${date.getHours()}` +
      `${date.getMinutes()}`;
    const id = Math.floor(Number(idDate) + Math.random() * Number(idDate));
    return id;
  };

  const newData = {
    id: createId(),
    content: newContent,
  };
  data.push(newData);
};

export const deleteApi = () => {};
const 박준영 = 멍충이;
console.log(박준영);
