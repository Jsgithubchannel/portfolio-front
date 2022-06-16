import axios from "axios";

export const getProject = async () => {
  return axios
    .get(`/api/project/`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      alert("예기치 못한 에러가 발생했습니다.");
    });
};
