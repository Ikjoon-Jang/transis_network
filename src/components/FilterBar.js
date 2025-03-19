import React from "react";

const FilterBar = () => {

    return (
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
            {/* 왼쪽 필터 그룹 */}
            <div className="flex items-center space-x-4 bg-blue-500 text-white p-4 rounded-lg">

                <div style={{
                    display: "flex",
                    justifyContent: "center", // 가로 중앙 정렬
                    alignItems: "center",      // 세로 중앙 정렬
                    height: "50px",           // DIV#1 높이
                    width: "100%",             // 부모 컨테이너의 전체 너비
                    backgroundColor: "#FAFAFA",
                    border: "1px solid #DDDDDD"

                }}>

                    <div style={{
                        display: "flex",
                        gap: "10px" // 🔹 DIV#2와 DIV#3 사이 간격 설정
                    }}>

                        <div style={{
                            width: "460px",
                            height: "20px",
                            backgroundColor: "#EEEEEE",
                            display: "flex",
                            padding: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid #CCCCCC"
                        }}>
                            <span style={{ fontSize: "14px", fontWeight: "bold"}}>▷ 옵션</span>
                            &nbsp;&nbsp;
                            <select style={{width:"80px", textAlignLast:"center"}} className="border border-gray-300 bg-white rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option>Lv 1</option>
                                <option>Lv 2</option>
                                <option>Lv 3</option>
                            </select>
                            &nbsp;&nbsp;
                            <select style={{width:"80px", textAlignLast:"center"}} className="border border-gray-300 bg-white rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option>유형</option>
                                <option>타입 1</option>
                                <option>타입 2</option>
                            </select>
                            &nbsp;&nbsp;
                            <select style={{width:"80px", textAlignLast:"center"}} className="border border-gray-300 bg-white rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option>구분</option>
                                <option>레벨 1</option>
                                <option>레벨 2</option>
                            </select>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div style={{
                            width: "480px",
                            height: "20px",
                            backgroundColor: "#EEEEEE",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "5px",
                            border: "1px solid #CCCCCC"
                        }}>
                            <span style={{ fontSize: "14px", fontWeight: "bold"}}>▷ 필터</span>
                            &nbsp;&nbsp;
                            <select style={{width:"80px", textAlignLast:"center"}} className="border border-gray-300 bg-white rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option>전체</option>
                                <option>P코드 1</option>
                                <option>P코드 2</option>
                            </select>
                            &nbsp;&nbsp;&nbsp;
                            <select style={{width:"200px", textAlignLast:"center"}} className="border border-gray-300 bg-white rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option>COVER ASSY-REAR</option>
                                <option>상품 1</option>
                                <option>상품 2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
