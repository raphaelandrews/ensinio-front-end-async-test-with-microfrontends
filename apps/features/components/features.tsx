import FeaturesComponent from "./features/features";
import { FeatureItem, FeaturesData } from "@/types/Features";
import { useEffect, useState } from "react";
import axios from "axios";

const Features = () => {
  const [featuresData, setFeaturesData] = useState<FeaturesData | null>(null);

  async function getFeatureItem() {
    try {
      const featureItem = await axios.get("https://fake-api-ndrws.onrender.com/items");

      return featureItem.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

useEffect(() => {
  getFeatureItem().then((data: FeatureItem[]) => setFeaturesData({ data }));
}, []);

  
  return (
        <FeaturesComponent data={featuresData?.data || []} />
  );
}

export default Features;