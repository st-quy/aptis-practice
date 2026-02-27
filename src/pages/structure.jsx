import { useState } from "react";

export default function Structure() {
  const [filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);

  const skills = [
    {
      key: "speaking",
      title: "I. Kỹ năng Nói (12 phút)",
      rows: [
        ["1", "Thông tin cá nhân", "Trả lời 3 câu hỏi cá nhân", "30s mỗi câu"],
        ["2", "Mô tả, quan điểm", "Mô tả tranh + câu hỏi", "45s mỗi câu"],
        ["3", "So sánh", "2 tranh + quan điểm", "45s mỗi câu"],
        ["4", "Thảo luận", "Chủ đề mở rộng", "1’ chuẩn bị + 2’ nói"],
      ],
    },
    {
      key: "listening",
      title: "II. Kỹ năng Nghe (40 phút)",
      rows: [
        ["1", "Thông tin ngắn", "13 đoạn hội thoại", "Trắc nghiệm"],
        ["2", "4 người nói", "Nối ý kiến", "Matching"],
        ["3", "2 người nói", "Quan điểm", "Matching"],
        ["4", "Độc thoại dài", "Suy luận", "Trắc nghiệm"],
      ],
    },
    {
      key: "grammar",
      title: "III. Ngữ pháp & Từ vựng (25 phút)",
      rows: [
        ["1", "Grammar", "Điền từ", "MCQ"],
        ["2", "Vocabulary", "Nối từ/định nghĩa", "Matching"],
      ],
    },
    {
      key: "reading",
      title: "IV. Kỹ năng Đọc (35 phút)",
      rows: [
        ["1", "Đọc câu", "Chọn nghĩa đúng", "MCQ"],
        ["2/3", "Sắp xếp", "Tạo đoạn văn", "Drag drop"],
        ["4", "Quan điểm", "Nối ý kiến", "Matching"],
        ["5", "Đoạn văn dài", "Chọn chủ đề", "Matching"],
      ],
    },
    {
      key: "writing",
      title: "V. Kỹ năng Viết (50 phút)",
      rows: [
        ["1", "Viết câu", "Hoàn thành", "1-5 từ"],
        ["2", "Đoạn ngắn", "20-30 từ", ""],
        ["3", "3 câu", "30-40 từ", ""],
        ["4", "Email", "Thân mật + trang trọng", ""],
      ],
    },
  ];

  const visibleSkills =
    filter === "all" ? skills : skills.filter((s) => s.key === filter);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="container py-10">
        {/* ===== Intro ===== */}
        <div className="text-center mb-8 fade-in">
          <h1 className="text-3xl font-bold">Cấu trúc bài thi Aptis ESOL</h1>
          <p className="opacity-70">Tổng quan các phần thi & thời gian</p>
        </div>

        {/* ===== Controls ===== */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            "all",
            "speaking",
            "listening",
            "grammar",
            "reading",
            "writing",
          ].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl border ${
                filter === f ? "bg-blue-500 text-white" : ""
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-xl border"
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* ===== Tables ===== */}
        <main className="space-y-10">
          {visibleSkills.map((skill) => (
            <section
              key={skill.key}
              className="skill-card fade-in-up bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 transition"
            >
              <h2 className="text-xl font-semibold mb-4">{skill.title}</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th>Phần</th>
                      <th>Bố cục</th>
                      <th>Nội dung</th>
                      <th>Hình thức</th>
                    </tr>
                  </thead>

                  <tbody>
                    {skill.rows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        {row.map((cell, j) => (
                          <td key={j} className="p-2">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          {/* Quote */}
          <section className="text-center italic opacity-70 fade-in">
            “Thành công không phải là ngẫu nhiên. Nó là làm việc chăm chỉ, kiên
            trì, học hỏi và yêu những gì bạn đang làm.” – Pelé
          </section>
        </main>
      </div>
    </div>
  );
}
