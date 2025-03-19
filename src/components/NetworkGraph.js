import React from "react";
import ReactECharts from "echarts-for-react";

const NetworkGraph = () => {
    const option = {
        title: {
            left: "center"
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
            {
                type: "graph",
                layout: "none",
                force: {
                    repulsion: 300,
                    edgeLength: 300
                },
                roam: true, // 줌 & 이동 가능
                zoom: 0.9,
                label: {
                    show: true,
                    fontSize: 14,
                    formatter: function (params) {
                        return params.data.label; // 👈 표시할 라벨을 'label' 속성에서 가져오기
                    }
                },
                data: [
                    { name: "Node 1", x:1210, y:50, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: 10, label: {formatter:"현대제철", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 2", x:1200, y:180, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: 20, label: {formatter:"포스코", position: "top", fontSize: 12, color: "#ff33a8" } },

                    { name: "Node 3", x:620, y:280, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: 30, label: {formatter:"한융금속", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 4", x:600, y:320, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: 40, label: {formatter:"HKM", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 5", x:620, y:350, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: 50, label: {formatter:"주밀금속", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 6", x:650, y:370, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: 60, label: {formatter:"에이엘베스트", position: "top", fontSize: 12, color: "#ff33a8" } },

                    { name: "Node 8", x:1150, y:110, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: 70, label: {formatter:"B社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 9", x:1130, y:200, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: 80, label: {formatter:"C社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 10", x:1150, y:280, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: 90, label: {formatter:"D社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 11", x:680, y:310, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: 100, label: {formatter:"A社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 12", x:1020, y:140, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 110, label: {formatter:"B社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 13", x:1010, y:230, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 120, label: {formatter:"C社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 14", x:1020, y:310, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 130, label: {formatter:"D社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 15", x:880, y:180, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 140, label: {formatter:"E社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 16", x:850, y:210, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 150, label: {formatter:"F社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 17", x:830, y:240, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 160, label: {formatter:"G社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 18", x:850, y:285, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 170, label: {formatter:"H社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 19", x:880, y:310, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 180, label: {formatter:"I社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 20", x:780, y:280, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: 190, label: {formatter:"A社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 21", x:900, y:250, symbol: "diamond", symbolSize: 22, itemStyle: { color: "#E03C00"}, value: 200, label: {formatter:"A社", position: "top", fontSize: 12, color: "#000000" } }
                ],
                links: [
                    { source: "Node 1", target: "Node 8" },
                    { source: "Node 2", target: "Node 8" },
                    { source: "Node 2", target: "Node 9" },
                    { source: "Node 2", target: "Node 10" },
                    { source: "Node 8", target: "Node 12" },
                    { source: "Node 9", target: "Node 13" },
                    { source: "Node 10", target: "Node 14" },
                    { source: "Node 12", target: "Node 21" },
                    { source: "Node 13", target: "Node 21" },
                    { source: "Node 14", target: "Node 21" },
                    { source: "Node 21", target: "Node 15" },
                    { source: "Node 21", target: "Node 16" },
                    { source: "Node 21", target: "Node 17" },
                    { source: "Node 21", target: "Node 18" },
                    { source: "Node 21", target: "Node 19" },
                    { source: "Node 21", target: "Node 20" },
                    { source: "Node 20", target: "Node 11" },
                    { source: "Node 11", target: "Node 3" },
                    { source: "Node 11", target: "Node 4" },
                    { source: "Node 11", target: "Node 5" },
                    { source: "Node 11", target: "Node 6" }
                ]
            }
        ]
    };

    const legendData = [
        { color: "#FF3B3B", shape: "◆", level: 1, count: 1 },
        { color: "#FF6D28", shape: "■", level: 2, count: 9 },
        { color: "#FFA500", shape: "■", level: 3, count: 4 },
        { color: "#FFD700", shape: "●", level: 4, count: 0 },
        { color: "#A5E55B", shape: "●", level: 5, count: 6 },
        { color: "#52D6C6", shape: "●", level: 6, count: 7 },
        { color: "#FFD700", shape: "●", level: 7, count: 0 },
        { color: "#A5E55B", shape: "●", level: 8, count: 6 },
        { color: "#52D6C6", shape: "●", level: 9, count: 7 },
        { color: "#FFD700", shape: "●", level: 10, count: 0 },
        { color: "#A5E55B", shape: "●", level: 11, count: 6 },
        { color: "#52D6C6", shape: "●", level: 12, count: 7 },
        { color: "#AD55E5", shape: "▲", level: "원자재", count: 6 }
    ];

    //return <ReactECharts option={option} style={{ height: "800px" }} />;

    return (

        <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>


            {/* 범례 (왼쪽 배치) */}
            <div style={{
                width: "200px",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#FFF",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "20px",
                position: "fixed",  // 📌 화면에 고정
                bottom: "150px",     // 📌 하단에서 50px 위로 배치
                left: "50px"
            }}>
                <h4 style={{ marginBottom: "10px", textAlign: "center" }}>업체 요약</h4>
                <table>
                    <thead>
                    <tr>
                        <th style={{ padding: "5px 10px" }}>범례</th>
                        <th style={{ padding: "5px 10px" }}>Lv</th>
                        <th style={{ padding: "5px 10px" }}>업체 수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {legendData.map((item, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: "center", color: item.color }}>{item.shape}</td>
                            <td style={{ textAlign: "center" }}>{item.level}</td>
                            <td style={{ textAlign: "center" }}>{item.count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* ECharts 그래프 */}
            <ReactECharts option={option} style={{ width: "80%", height: "100%" }} />
        </div>
    );

};

export default NetworkGraph;