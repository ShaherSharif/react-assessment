import React from "react";
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
  
  const layout = [
    { i: "lineChart", x: 0, y: 0, w: 2, h: 2 },
    { i: "pieChart", x: 2, y: 0, w: 2, h: 2 },
    { i: "barChart", x: 0, y: 2, w: 4, h: 2 },
    { i: "usersTable", x: 0, y: 4, w: 2, h: 2 },
    { i: "productsTable", x: 2, y: 4, w: 2, h: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Sample Dashboard with Resize & Reposition</h1>

      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={200}
        width={1400}
        draggableHandle=".drag-handle"
        isResizable={true}
        isDraggable={true}
      >
        <div key="lineChart" className="bg-white shadow-md p-4 rounded-lg">
          <div className="drag-handle cursor-move flex justify-center">
            <MdDragIndicator size={24} className="text-gray-500" />
          </div>
          <SalesLineChart />
        </div>
        <div key="pieChart" className="bg-white shadow-md p-4 rounded-lg">
          <div className="drag-handle cursor-move flex justify-center">
            <MdDragIndicator size={24} className="text-gray-500" />
          </div>
          <CategoryPieChart />
        </div>
        <div key="barChart" className="bg-white shadow-md p-4 rounded-lg">
          <div className="drag-handle cursor-move flex justify-center">
            <MdDragIndicator size={24} className="text-gray-500" />
          </div>
          <SalesBarChart />
        </div>
        <div key="usersTable" className="bg-white shadow-md p-4 rounded-lg">
          <div className="drag-handle cursor-move flex justify-center">
            <MdDragIndicator size={24} className="text-gray-500" />
          </div>
          <UsersTable />
        </div>
        <div key="productsTable" className="bg-white shadow-md p-4 rounded-lg">
          <div className="drag-handle cursor-move flex justify-center">
            <MdDragIndicator size={24} className="text-gray-500" />
          </div>
          <ProductsTable />
        </div>
      </GridLayout>
    </div>
  );
}
