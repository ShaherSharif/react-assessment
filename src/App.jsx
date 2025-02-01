import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import { SalesLineChart } from "./components/salesLineChart.tsx";
import { SalesBarChart } from "./components/salesBarChart.tsx";
import { CategoryPieChart } from "./components/categoryPieChart.tsx";
import { UsersTable, ProductsTable } from "./components/usersTable.tsx";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { MdDragIndicator } from "react-icons/md";

// Main App Component
export default function App() {
  const initialLayout = [
    { i: "lineChart", x: 0, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
    { i: "pieChart", x: 2, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
    { i: "barChart", x: 0, y: 2, w: 4, h: 2, minW: 2, minH: 1 },
    { i: "usersTable", x: 0, y: 4, w: 2, h: 2, minW: 1, minH: 1 },
    { i: "productsTable", x: 2, y: 4, w: 2, h: 2, minW: 1, minH: 1 }
  ];

  const [layout, setLayout] = useState(initialLayout);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Sample Dashboard with Resize & Reposition</h1>

      <GridLayout
        className="layout"
        layout={layout}
        onLayoutChange={handleLayoutChange}
        cols={4}
        rowHeight={200}
        width={1400}
        draggableHandle=".drag-handle"
        isResizable={true}
        isDraggable={true}
        compactType={null} // Ensures widgets don't auto-stack
        preventCollision={false} // Allows repositioning even when resizing
      >
        {layout.map((item) => (
          <div key={item.i} className="bg-white shadow-md p-4 rounded-lg">
            <div className="drag-handle cursor-move flex justify-center">
              <MdDragIndicator size={24} className="text-gray-500" />
            </div>
            {item.i === "lineChart" && <SalesLineChart />}
            {item.i === "pieChart" && <CategoryPieChart />}
            {item.i === "barChart" && <SalesBarChart />}
            {item.i === "usersTable" && <UsersTable />}
            {item.i === "productsTable" && <ProductsTable />}
          </div>
        ))}
      </GridLayout>
    </div>
  );
}
