import { Typography } from 'antd';
import ExerciseBlock from '../../components/ExerciseBlock/ExerciseBlock';
import MethodExplanation from '../../components/MethodExplanation';
import '../../styles/ReadingPart2.scss';

const { Title, Paragraph } = Typography;

/* ──────────────────────────────────────────────────────────
   Dữ liệu bài tập – mỗi object tương ứng một ExerciseBlock
─────────────────────────────────────────────────────────── */
const exercises = [
    {
        id: 1,
        title: 'Đề bài 1: Nhập học / Nhà hàng',
        badgeType: 'bia',
        badgeLabel: 'Bia (Giả nhớ)',
        sentences: [
            'When you arrive ...',
            'A member of staff ...',
            'He or she ...',
            'You can use ...',
            'You will find ...',
        ],
        answer: [
            'When you arrive ...',
            'You will find ...',
            'A member of staff ...',
            'He or she ...',
            'You can use ...',
        ],
        story: 'Đây là câu chuyện bia giúp bạn nhớ thứ tự đúng: khi đến nơi, tìm kiếm thành viên nhân viên hướng dẫn, và cuối cùng sử dụng dịch vụ.',
    },
    {
        id: 2,
        title: 'Đề bài 2: Đi gửi xe',
        badgeType: 'logic',
        badgeLabel: 'Logic (Thật)',
        sentences: [
            'The machine will ...',
            'Please display the ticket ...',
            'The ticket will have ... date and time',
            'When you arrive ...',
            'Before you leave......',
        ],
        answer: [
            'When you arrive ...',
            'The machine will ...',
            'The ticket will have ... date and time',
            'Please display the ticket ...',
            'Before you leave......',
        ],
        story: 'Câu chuyện logic: bạn đến bãi xe, máy cấp vé có ghi ngày giờ, bạn để vé trên xe và khi rời đi xuất trình vé.',
    },
    {
        id: 3,
        title: 'Đề bài 3: Câu chuyện nhà ban đầu',
        badgeType: 'bia',
        badgeLabel: 'Bia (Giả nhớ)',
        sentences: [
            'That original house',
            'Too small',
            'Since then,',
            'Today it has hundreds of rooms',
            'After extension',
        ],
        answer: [
            'That original house',
            'Too small',
            'After extension',
            'Since then,',
            'Today it has hundreds of rooms',
        ],
        story: 'Ngôi nhà ban đầu quá nhỏ, sau khi mở rộng, kể từ đó, ngày nay có hàng trăm phòng.',
    },
    {
        id: 4,
        title: 'Đề bài 4: Câu chuyện ca sĩ nổi tiếng',
        badgeType: 'logic',
        badgeLabel: 'Logic (Thật)',
        sentences: [
            'Jay was nearly good at',
            'At one of these events',
            'When he was young,',
            'He become successful',
            'He started his highschool',
        ],
        answer: [
            'When he was young,',
            'He started his highschool',
            'Jay was nearly good at',
            'At one of these events',
            'He become successful',
        ],
        story: 'Khi còn nhỏ, anh ấy bắt đầu học trung học, gần như giỏi, tại một sự kiện, anh ấy thành công.',
    },
    {
        id: 5,
        title: 'Đề bài 5: Câu chuyện thuyết trình (Đề mới cập nhật)',
        badgeType: 'bia',
        badgeLabel: 'Bia (Giả nhớ)',
        sentences: [
            'Before the open day',
            'Following these presentations',
            'With this information',
            'You must show',
            'Each one',
        ],
        answer: [
            'Before the open day',
            'With this information',
            'Each one',
            'Following these presentations',
            'You must show',
        ],
        story: 'Trước ngày mở cửa, với thông tin này, từng người một, theo sau buổi thuyết trình, bạn phải giới thiệu.',
    },
    {
        id: 6,
        title: 'Đề bài 6: Mua xe hơi cũ (Đề mới cập nhật)',
        badgeType: 'logic',
        badgeLabel: 'Logic (Thật)',
        sentences: [
            'That just passed',
            'We agreed on a price',
            'I called the number',
            'However,',
            'So,',
        ],
        answer: [
            'I called the number',
            'However,',
            'We agreed on a price',
            'That just passed',
            'So,',
        ],
        story: 'Tôi gọi điện, tuy nhiên sau đó chúng tôi thống nhất giá, vừa qua, vì vậy...',
    },
];

/* ──────────────────────────────────────────────────────────
   Page Component
─────────────────────────────────────────────────────────── */
function ReadingPart2() {
    return (
        <div className="reading-container">
            <div className="page-intro">
                <Title level={1} className="page-intro__title">Reading – Part 2</Title>
                <Paragraph className="page-intro__subtitle">Luyện tập các câu hỏi của Part 2</Paragraph>
            </div>

            {/* Phương pháp học */}
            <MethodExplanation />

            {/* Danh sách bài tập */}
            {exercises.map((ex) => (
                <ExerciseBlock
                    key={ex.id}
                    title={ex.title}
                    badgeType={ex.badgeType}
                    badgeLabel={ex.badgeLabel}
                    sentences={ex.sentences}
                    answer={ex.answer}
                    story={ex.story}
                />
            ))}
        </div>
    );
}

export default ReadingPart2;
