import { urls } from "@constants";
import { httpGet, httpPost } from "@services";
import { IAzsRequest, IAzsAllResponse, IRegionsResponse } from "./types";

class AzsService {
    public async azsAll(data: IAzsRequest): Promise<IAzsAllResponse> {
      return await httpPost(`${urls.fillingStations}`, data);
    }
    public async getRegions(): Promise<IRegionsResponse> {
      return await httpGet(`${urls.regions}`);
    }
  }

export default new AzsService();