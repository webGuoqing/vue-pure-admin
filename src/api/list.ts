/*
 * @Author: webguoqing webguoqing@163.com
 * @Date: 2023-03-05 21:57:09
 * @LastEditors: webguoqing webguoqing@163.com
 * @LastEditTime: 2023-03-08 22:00:18
 * @FilePath: \vue-pure-admin\src\api\list.ts
 * @Description:  打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
  };
};

/** 卡片列表 */
export const getCardList = (data?: object) => {
  return http.request<Result>("post", "/getCardList", { data });
};
