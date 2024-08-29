import axios from "axios";

export const fetchMarket = async () => {
  try {
    const result = await axios.get(
      "http://3.80.55.144:21102/governance/biturbolend",
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};
