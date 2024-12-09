"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className='bg-white p-4 text-black rounded-[1px] shadow-md w-full max-w-md'>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
