import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uDGUMPIW68w1BbitZiinNk_xmogOmMkvzOvU4G09yMQ",
  },
});
//建立api個人設定資訊
