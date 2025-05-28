import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2F471b9930F470035FB673523aCA78890005Ad97"
);

export default instance;
