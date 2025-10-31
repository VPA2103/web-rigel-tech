import React from "react";
import { SERVICES } from "@/constants/data";
import Image from "next/image";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export default function ServiceExtra(): React.ReactElement {
  // Lọc ra 2 dịch vụ cần hiển thị
  const selectedServices: Service[] = SERVICES.filter((service) =>
    ["Hỗ trợ CNTT", "Cho thuê máy chủ"].includes(service.title)
  );

  return React.createElement(
    "section",
    { className: "py-16 bg-gray-50" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      // Header
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "h2",
          { className: "text-3xl md:text-4xl font-bold text-primary-600" },
          "Dịch Vụ Mới Nhất"
        ),
        React.createElement(
          "p",
          { className: "text-gray-500 mt-3" },
          "Các dịch vụ hỗ trợ và cho thuê máy chủ chuyên nghiệp"
        )
      ),
      // Grid hiển thị các dịch vụ
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
        selectedServices.map((service, index) =>
          React.createElement(
            "div",
            {
              key: index,
              className:
                "bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300",
            },
            // Phần tiêu đề + icon
            React.createElement(
              "div",
              { className: "flex items-start gap-4 mb-3" },
              React.createElement(
                "div",
                {
                  className:
                    "w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0",
                },
                React.createElement(Image, {
                  src: service.icon,
                  alt: service.title,
                  width: 24,
                  height: 24,
                })
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h3",
                  { className: "text-lg font-semibold text-gray-800" },
                  service.title
                ),
                React.createElement(
                  "p",
                  { className: "text-sm text-primary-600 font-medium" },
                  service.subtitle
                )
              )
            ),
            // Mô tả dịch vụ
            React.createElement(
              "p",
              { className: "text-gray-600 text-sm leading-relaxed" },
              service.description
            )
          )
        )
      )
    )
  );
}
