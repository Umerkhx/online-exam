"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";

export default function Modal() {
  const [isParamMatched, setIsParamMatched] = useState(false);
  const searchParams = useSearchParams();
  const coupon = searchParams.get("coupon");
  const discount = localStorage.getItem("discount");


  

  useEffect(() => {
    if (coupon === "off50" || coupon === "off40") {
      setIsParamMatched(true);
    }
  }, [coupon]);

  return isParamMatched ? (
    <div>
      <Dialog defaultOpen>
        <DialogContent
          style={{
            backgroundImage: "url('/imgs/coupon_background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="sm:max-w-[405px] h-72 sm:max-h-80"
        >
          <DialogHeader>
            <DialogTitle className=" text-center font-bold text-2xl text-zinc-100 pt-8">
              Congratulations! 🎉
            </DialogTitle>
            <DialogDescription className=" text-center py-4 font-semibold text-sm text-zinc-100">
              You’ve just unlocked an amazing {coupon === "off50" ? "50%" : "40%"}{" "}
              OFF discount on your order! We’re thrilled to offer you this
              special savings. Your discount has been successfully applied, so
              you can enjoy even more value from your purchase. Thank you for
              choosing us, and we hope you love what’s coming your way!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  ) : null;
}
