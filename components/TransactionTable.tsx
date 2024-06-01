import { API } from "@/api/api";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./compounds/DropdownMenu";
import { SpinnerCircular } from "spinners-react";

interface TransactionTableProps {
  className?: string;
  children?: React.ReactNode;
}
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

const TransactionTable: React.FC<TransactionTableProps> = () => {
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
    return (
      <div className="flex justify-center py-10">
        <SpinnerCircular color="#d75e23" secondaryColor="gray" />;
      </div>
    );
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
        <div className="flex flex-col justify-center mt-6">
          <div className="grid grid-cols-7 gap-4 font-semibold text-sm text-center mb-4">
            <div>Type</div>
            <div>Location</div>
            <div>Rental</div>
            <div>IP Count</div>
            <div>Purpose</div>
            <div>Date</div>
            <div>Actions</div>
          </div>
          {processedData.length > 0 ? (
            processedData?.map((d) => (
              <>
                <div
                  key={Math.random() * 9999}
                  className="grid grid-cols-7 gap-4 py-4 text-sm text-transaction_text text-center"
                >
                  <div>{d?.type}</div>
                  <div>{d?.location}</div>
                  <div>{d?.rental}</div>
                  <div>{d?.ipcount}</div>
                  <div>{d?.purpose}</div>
                  <div>{formatDate(d?.date)}</div>
                  <div className="flex justify-center ">
                    <DropdownMenu ipcount={d.ipcount} />
                  </div>
                </div>
                <hr className="border-[0.5px] w-full border-gray_primary " />
              </>
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
