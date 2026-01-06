// sales_config.js - 銷售人員資料庫

const salesTeam = {
    // 這裡設定每個銷售的代號 (ID)
    "A": {
        name: "銷售 A (志哥)",
        phone: "85263771688" // 這裡填真實電話
    },
    "B": {
        name: "銷售 B (博士)",
        phone: "85263778262"
    },
    "C": {
        name: "銷售 C (嫦姐)",
        phone: "85298233606"
    },
    "D": {
        name: "銷售 D (David)",
        phone: "85297944983"
    }
};

// 預設電話 (如果網址沒帶代號，就用這個)
const defaultSales = "A";
