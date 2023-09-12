"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import loadingSettings from "../assets/loadingSettings.gif";
import loading_started from "../assets/loading_started.gif";

export default function Loading() {
  const [ShowSettingsSpinner, setShowSettingsSpinner] = useState(false);
  const [PageLoaded, setPageLoaded] = useState(false);
  const [ShowLoadedSpinner, setShowLoadedSpinner] = useState(false);

  useEffect(() => {
    setShowSettingsSpinner(true);
    setPageLoaded(true);
  }, []);

  var spinner;
  var text;

  if (PageLoaded) {
    if (ShowLoadedSpinner) {
      spinner = loading_started;
      text = "داده ها گرفته شد";
    } else if (ShowSettingsSpinner) {
      spinner = loadingSettings;
      text = "در حال اجرای تنظیمات";
    } else {
      const router = useRouter();
      router.push("/quiz");
    }
  }

  var timer = setTimeout(() => {
    setShowSettingsSpinner(false);
    setShowLoadedSpinner(true);
    
    setTimeout(() => {
        setShowLoadedSpinner(false);
    }, 1000);
    clearTimeout(timer)
  }, 1000);


  return (
    <div
      style={{ display: "flex", textAlign: "center", flexDirection: "column" }}
    >
      <img
        src={spinner ? spinner.src : ""}
        style={{ margin: "auto" }}
        width="300px"
        alt="loading img"
      />
      <h2 style={{ color: "green" }}>{text}</h2>
    </div>
  );
}
