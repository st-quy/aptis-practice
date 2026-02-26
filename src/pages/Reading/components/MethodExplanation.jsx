import './MethodExplanation.css';

/**
 * MethodExplanation
 * Khung giải thích phương pháp làm bài cho Reading Part 2
 */
function MethodExplanation() {
    return (
        <div className="method-box">
            <h3 className="method-box__heading">🎯 Giải thích phương pháp học</h3>

            {/* Section 1 – Câu chuyện Logic */}
            <div className="method-box__section">
                <p>
                    <span className="method-box__label method-box__label--blue">Câu chuyện Logic (Thật):</span>{' '}
                    Là câu chuyện được xây dựng dựa trên trình tự hợp lý của các câu trong đề thi thật.
                    Bạn chỉ cần đọc và hiểu để ghi nhớ.
                </p>

                <p className="method-box__example-title">
                    Ví dụ "Câu chuyện Logic" (Chủ đề: Tham quan triển lãm):
                </p>
                <p style={{ marginBottom: '4px', fontSize: '0.82rem', color: 'rgba(86, 47, 0, 0.78)' }}>
                    Dưới đây là các câu đã được sắp xếp theo đúng thứ tự logic của một quy trình:
                </p>

                <ol className="method-box__ordered">
                    <li>When you arrive, go <strong>straight</strong> to the main office to collect your ticket</li>
                    <li>You will need to <strong>show this</strong> to a member of staff at the door before you enter</li>
                    <li><strong>Inside</strong> the building, you will find a photography exhibition on the ground floor</li>
                    <li><strong>Before</strong> you look at the pictures, a guide will tell you about the day's event</li>
                    <li>These <strong>activities</strong> will include playing and feeding the animals</li>
                </ol>
            </div>

            {/* Section 2 – Câu chuyện Bia */}
            <div className="method-box__section">
                <p>
                    <span className="method-box__label method-box__label--orange">Câu chuyện Bia (Giả nhớ):</span>{' '}
                    Là một câu chuyện sáng tạo, không liên quan đến bài đọc gốc. Mục đích là để "mỏ hộp"
                    thứ tự đáp án <span className="method-box__key">(key)</span> khó nhớ.
                </p>

                <p className="method-box__example-title">
                    Ví dụ "Câu chuyện Bia" (Chủ đề: Tờ rơi ăn chạy – Key: 1-2-3-4-5):
                </p>
                <p style={{ marginBottom: '6px', fontSize: '0.82rem', color: 'rgba(86, 47, 0, 0.78)' }}>
                    Hãy xem cách chúng ta tạo ra câu chuyện "bia" từ những từ đầu tiên của các câu gốc
                    (lấy từ chủ đề "Mua nhà"):
                </p>

                <blockquote>
                    Câu chuyện bia: "Đầu tiên (1) thấy tờ rơi, để ăn chạy (2) thì tốt nhất (3) phải ăn nhiều rau,
                    người ra còn có yếu tố khác (4) như là (5) hạt và trái cây"
                </blockquote>

                <ul className="method-box__bullets">
                    <li>
                        <span>(1) <em>The first</em> → "The first and most important thing is to choose the location!"</span>
                    </li>
                    <li>
                        <span>(2) <em>In order to</em> → "In order to choose the right place, you need to consider…"</span>
                    </li>
                    <li>
                        <span>(3) <em>The most im...</em> → "The most important of these to look at is the price…"</span>
                    </li>
                    <li>
                        <span>(4) <em>Other factors</em> → "Other factors to look at is the place of employment…"</span>
                    </li>
                    <li>
                        <span>(5) <em>Such as</em> → "Such requirements of course depend on your personal circumstances"</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MethodExplanation;
