package com.grupo8.digitalbooking.util;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;

public class Util {

    public static Timestamp dateToTimestamp(Date date) {
        Timestamp timestamp = new Timestamp(date.getTime());
        return timestamp;
    }

    public static java.sql.Date utilDateToSqlDate(Date utilDate) {
        long timeInMilliSeconds = utilDate.getTime();
        java.sql.Date sqlDate = new java.sql.Date(timeInMilliSeconds);
        return sqlDate;
    }

    public static java.sql.Time utilDateToSqlTime(Time utilDate) {
        long lnMilisegundos = utilDate.getTime();
        java.sql.Time sqlTime = new java.sql.Time(lnMilisegundos);
        return sqlTime;
    }

}