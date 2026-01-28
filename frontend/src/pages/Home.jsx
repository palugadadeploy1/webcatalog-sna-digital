import { useEffect, useState } from "react";
import api from "../services/api";
import TemplateCard from "../components/TemplateCard";

export default function Home() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    api.get("/templates")
      .then(res => {
       DEBUGGER;
        console.log("RAW RESPONSE:", res.data);
        console.log("DATA ARRAY:", res.data.data);
  
        const mapped = res.data.data.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          preview_url: item.preview_url,
        }));
  
        console.log("MAPPED FINAL:", mapped);
        setTemplates(mapped);
      })
      .catch(err => {
        console.error("API ERROR:", err);
      });
  }, []);
  
  

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Katalog Undangan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map(item => (
          <TemplateCard key={item.id} template={item} />
        ))}
      </div>
    </>
  );
}
