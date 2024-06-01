import { API } from "@/api/api";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./compounds/DropdownMenu";

interface DataItem {
  type: string;
  location: string;
  rental: string;
  ipcount: string;
  purpose: string;
  date: string;
}

interface ProcessedDataItem {
  type: string;
  location: string;
  rental: string;
  ipcount: number;
  purpose: string;
  date: Date;
}

const TransactionTable: React.FC = () => {
  const [processedData, setProcessedData] = useState<ProcessedDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    API.get("get-table")
      .then((res) => {
        const mappedData = res.data.data.map((item: DataItem) => ({
          type: item.type,
          location: item.location,
          rental: item.rental,
          ipcount: parseInt(item.ipcount),
          purpose: item.purpose,
          date: new Date(item.date),
        }));

        setProcessedData(mappedData);
      })
      .catch((err) => {
        setError("Veri çekilirken bir hata oluştu: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-red-700 text-center pb-20">{error}</div>;
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto pb-16">
      <div className="w-[825px]  bg-white rounded-2xl p-6 flex flex-col">
        <h4 className="text-transaction_text text-xl font-semibold">
          Transactions History
        </h4>
        <div className="flex flex-col gap-4 mt-6">
          <div className="grid grid-cols-7 gap-4 font-semibold text-sm text-center">
            <div>Type</div>
            <div>Location</div>
            <div>Rental</div>
            <div>IP Count</div>
            <div>Purpose</div>
            <div>Date</div>
            <div>Actions</div>
          </div>
          {processedData.length > 0 ? (
            processedData?.map((d, index) => (
              <div
                key={index}
                className="grid grid-cols-7 gap-4 text-sm text-transaction_text text-center"
              >
                <div>{d?.type}</div>
                <div>{d?.location}</div>
                <div>{d?.rental}</div>
                <div>{d?.ipcount}</div>
                <div>{d?.purpose}</div>
                <div>{formatDate(d?.date)}</div>
                <div className="flex justify-center ">
                  <DropdownMenu />
                </div>
              </div>
            ))
          ) : (
            <div>Veri Bulunamadı.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
