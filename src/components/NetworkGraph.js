import React from "react";
import ReactECharts from "echarts-for-react";

const NetworkGraph = () => {
    const option = {
        title: {
            left: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: function (params) {
                return `
                <div style="padding: 2px; border-radius: 5px; border: 0px solid #FF7F00; background-color: #fff; text-align: left;">
                    <span style="font-size: 14px;">▶</span> 
                    <strong>${params.value}</strong>
                    <br/>
                    <span style="color: gray; font-size: 12px;">${params.data.description || "설명 없음"}</span>
                </div>`;
            },
            backgroundColor: "#fff",
            borderColor: "#FF7F00",
            borderWidth: 1,
            textStyle: {
                color: "#333",
            }
        },
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
                    { name: "Node 1", desc:"abc", x:1210, y:50, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: "현대제철", description:"<strong>대한민국을 대표하는 철강 제조 기업으로, 현대자동차 그룹 계열사 중 하나</strong><br/><br/>● <strong>설립:</strong> 1953년 (구. 인천제철 → 현대제철로 사명 변경)<br>● <strong>본사:</strong> 대한민국 서울특별시<br>● <strong>주요사업:</strong> 철강 생산 (자동차 강판, 조선용 강재, 건설용 철근 등)<br>● <strong>모기업:</strong> 현대자동차 그룹<br>● <strong>홈페이지:</strong> https://www.hyundai-steel.com ", label: {formatter:"현대제철", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 2", x:1200, y:180, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: "포스코", description:"<strong>대한민국을 대표하는 세계적인 철강 기업으로, 철강 생산량 기준 글로벌 TOP 5에 속하는 기업</strong><br/><br/>● <strong>설립:</strong> 1968년 (구. 포항제철 → POSCO로 사명 변경)<br>● <strong>본사:</strong> 대한민국 경상북도 포항시 (서울에도 사무소 운영)<br>● <strong>주요사업:</strong> 철강 생산 (자동차 강판, 조선·건설용 철강, 전기강판 등)<br>● <strong>모기업:</strong> 포스코홀딩스 (POSCO Holdings)<br>● <strong>홈페이지:</strong> https://www.posco.co.kr ", label: {formatter:"포스코", position: "top", fontSize: 12, color: "#ff33a8" } },

                    { name: "Node 3", x:620, y:280, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: "한융금속", label: {formatter:"한융금속", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 4", x:600, y:320, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: "HKM", label: {formatter:"HKM", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 5", x:620, y:350, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: "주밀금속", label: {formatter:"주밀금속", position: "top", fontSize: 12, color: "#ff33a8" } },
                    { name: "Node 6", x:650, y:370, symbol: "triangle", symbolSize: 18, itemStyle: { color: "#ff33a8"}, value: "에이엘베스트", label: {formatter:"에이엘베스트", position: "top", fontSize: 12, color: "#ff33a8" } },

                    { name: "Node 8", x:1150, y:110, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: "B社", label: {formatter:"B社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 9", x:1130, y:200, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: "C社", label: {formatter:"C社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 10", x:1150, y:280, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: "D社", label: {formatter:"D社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 11", x:680, y:310, symbol: "circle", symbolSize: 18, itemStyle: { color: "#FFB733"}, value: "A社", label: {formatter:"A社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 12", x:1020, y:140, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "B社", label: {formatter:"B社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 13", x:1010, y:230, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "C社", label: {formatter:"C社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 14", x:1020, y:310, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "D社", label: {formatter:"D社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 15", x:880, y:180, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "E社", label: {formatter:"E社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 16", x:850, y:210, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "F社", label: {formatter:"F社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 17", x:830, y:240, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "G社", label: {formatter:"G社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 18", x:850, y:285, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "H社", label: {formatter:"H社", position: "top", fontSize: 12, color: "#000000" } },
                    { name: "Node 19", x:880, y:310, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "I社", label: {formatter:"I社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 20", x:780, y:280, symbol: "rect", symbolSize: 18, itemStyle: { color: "#FF7F00"}, value: "A社", label: {formatter:"A社", position: "top", fontSize: 12, color: "#000000" } },

                    { name: "Node 21", x:900, y:250, symbol: "diamond", symbolSize: 22, itemStyle: { color: "#E03C00"}, value: "A社", label: {formatter:"A社", position: "top", fontSize: 12, color: "#000000" } }
                ],
                links: [
                    { source: "Node 1", target: "Node 8", value:"현대제철 - B社"},
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

        <div style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }}>
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
                position: "absolute",
                left: "50px",
                bottom: "50px"
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