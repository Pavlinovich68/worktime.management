'use client'
import { classNames } from "primereact/utils";
import React, {useRef, useState, useEffect} from "react";
import styles from "@/app/(main)/workplace/department/calendar/styles.module.scss"
import { ICalendarHeader } from "@/models/ICalendar";

const ItrProjectCalendarHeader = ({header}:{header: ICalendarHeader | null | undefined}) => {
   return (
      <div className={classNames("flex justify-content-center", styles.calendarHeader)}>
         <div className={classNames("flex align-items-center justify-content-center w-8rem font-bold", styles.cellHeader, styles.cellBl, styles.cellBt, styles.cellBr)}>
            {header?.name}
         </div>
         {
            header?.days?.map((day, i) => {   
               const key = `calendar-header-${i}`                      
               return (
                  <div key={key} className={classNames("flex align-items-center justify-content-center font-bold", styles.dataCell, styles.cellBt, styles.cellBr)}>
                     {day}
                  </div>
               )
            })
         }
      </div>
   );
};

export default ItrProjectCalendarHeader;