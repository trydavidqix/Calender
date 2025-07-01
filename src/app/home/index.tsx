import { View, Text } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { StyleSheetsHome } from "./styles";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { ptBr } from "../../utils/localeCalenderConfig";

LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

export function Home() {
  const [day, setDay] = useState<DateData>();

  return (
    <View style={StyleSheetsHome.container}>
      <Calendar
        style={StyleSheetsHome.calendar}
        renderArrow={(direction: "left" | "right") => (
          <Feather
            name={direction === "left" ? "chevron-left" : "chevron-right"}
            size={24}
            color="#e8e8e8"
          />
        )}
        headerStyle={{
          borderBottomWidth: 0.5,
          borderBottomColor: "#e8e8e8",
          paddingBottom: 12,
          marginBottom: 10,
        }}
        theme={{
          textMonthFontSize: 18,
          monthTextColor: "#e8e8e8",
          todayTextColor: "#f06543",
          selectedDayBackgroundColor: "#f06543",
          selectedDayTextColor: "#e8e8e8",
          arrowColor: "#f06543",
          calendarBackground: "transparent",
          textDayStyle: {
            color: "#e8e8e8",
          },
          textDisabledColor: "#717171",
          arrowStyle: {
            margin: 0,
            padding: 0,
          },
        }}
        minDate={new Date().toDateString()}
        hideExtraDays={true}
        onDayPress={setDay}
        markedDates={{
          [day?.dateString || ""]: {
            selected: true,
            marked: true,
            dotColor: "#f06543",
          },
        }}
      />
    </View>
  );
}
