"use client";
import { API } from "@/api/api";
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";

type initials = {
  dailyUsage: string;
  expireTime: string;
  lastCharge: string;
  lastChargeAmount: string;
  totalDataUsage: string;
};

const Status: React.FC = () => {
  const [data, setData] = useState<initials | undefined>(undefined);
  const [err, setErr] = useState<string>("");

  const formatUsage = (usage: string) => {
    const usageNumber = Number(usage);
    if (isNaN(usageNumber)) return usage;
    return (usageNumber / 1000).toLocaleString("en-EN", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      API.get("get-info")
        .then((res) => {
          setData(res.data);
        })
        .catch((e) =>
          setErr(
            "Veri çekilirken bir hata ile karşılaşıldı.. Lütfen daha sonra tekrar deneyiniz, veya sorunu bildiriniz."
          )
        );
    }
  });
  return (
    <>
      {err && (
        <div>
          <Alert severity="error">{err}</Alert>
        </div>
      )}
      {data ? (
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-7 py-16">
            <div className="bg-status_bg_blue rounded-2xl">
              <div className="flex flex-col gap-2 p-6">
                <h3 className="status-headers font-semibold ">
                  Subscription expires on
                </h3>
                <span className="status-spans font-medium">
                  {data.expireTime}
                </span>
              </div>
            </div>
            <div className="bg-status_bg_gray rounded-2xl">
              <div className="flex flex-col gap-2 p-6">
                <h3 className="status-headers font-semibold">Last charge</h3>
                <span className="status-spans font-medium">
                  {data.lastChargeAmount}{" "}
                  <span className="status-headers font-medium">
                    {data.lastCharge}
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-status_bg_blue rounded-2xl">
              <div className="flex flex-col gap-2 p-6">
                <h3 className="status-headers font-bold">Total Usage Data</h3>
                <span className="status-spans font-bold">
                  {formatUsage(data.totalDataUsage)} GB
                </span>
              </div>
            </div>
            <div className="bg-status_bg_gray rounded-2xl">
              <div className="flex flex-col gap-2 p-6">
                <h3 className="status-headers font-bold">Daily Usage Data</h3>
                <span className="status-spans font-bold">
                  {formatUsage(data.dailyUsage)} GB
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-10">
          <SpinnerCircular color="logo_orange_color" secondaryColor="gray" />;
        </div>
      )}
    </>
  );
};

export default Status;
