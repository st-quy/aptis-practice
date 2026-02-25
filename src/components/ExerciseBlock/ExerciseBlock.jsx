import { useState, useRef } from 'react';
import './ExerciseBlock.css';

/**
 * ExerciseBlock – Shared drag-and-drop sentence ordering component
 *
 * Props:
 *  - title      {string}   Exercise title (e.g. "Đề bài 1: Nhập học / Nhà hàng")
 *  - badgeType  {string}   "logic" | "bia"
 *  - badgeLabel {string}   Badge display text (e.g. "Logic (Thật)")
 *  - sentences  {string[]} Array of sentences in shuffled order
 *  - answer     {string[]} Array of sentences in correct order (for checking & display)
 *  - story      {string}   Optional short story/context text
 */
function ExerciseBlock({ title, badgeType = 'logic', badgeLabel, sentences, answer, story }) {
    const [items, setItems] = useState(() => sentences.map((text, i) => ({ id: i, text })));
    const [showAnswer, setShowAnswer] = useState(false);
    const [result, setResult] = useState(null); // null | 'correct' | 'wrong'

    const dragIndex = useRef(null);
    const dragOverIndex = useRef(null);

    /* ── Drag handlers ── */
    const handleDragStart = (index) => {
        dragIndex.current = index;
    };

    const handleDragEnter = (index) => {
        dragOverIndex.current = index;
        setItems((prev) => {
            const updated = [...prev];
            updated.forEach((item, i) => (item.over = i === index));
            return updated;
        });
    };

    const handleDragEnd = () => {
        const from = dragIndex.current;
        const to = dragOverIndex.current;
        if (from === null || to === null || from === to) {
            clearDragState();
            return;
        }
        setItems((prev) => {
            const updated = [...prev];
            const [moved] = updated.splice(from, 1);
            updated.splice(to, 0, moved);
            return updated.map((item) => ({ ...item, over: false }));
        });
        setResult(null);
        clearDragState();
    };

    const clearDragState = () => {
        dragIndex.current = null;
        dragOverIndex.current = null;
    };

    /* ── Check answer ── */
    const handleCheck = () => {
        const isCorrect = items.every((item, i) => item.text === answer[i]);
        setResult(isCorrect ? 'correct' : 'wrong');
    };

    return (
        <div className="exercise-block">
            {/* Header */}
            <div className="exercise-block__header">
                <h3 className="exercise-block__title">{title}</h3>
                {badgeLabel && (
                    <span className={`exercise-block__badge exercise-block__badge--${badgeType}`}>
                        {badgeLabel}
                    </span>
                )}
            </div>

            <p className="exercise-block__instruction">
                Kéo và thả để sắp xếp các câu theo đúng thứ tự.
            </p>

            {/* Draggable sentence list */}
            <ul className="exercise-block__list">
                {items.map((item, index) => (
                    <li
                        key={item.id}
                        className={`exercise-block__item${item.over ? ' drag-over' : ''}`}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragEnter={() => handleDragEnter(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnd={handleDragEnd}
                    >
                        <span className="exercise-block__item-num">({index + 1})</span>
                        {item.text}
                    </li>
                ))}
            </ul>

            {/* Result feedback */}
            {result && (
                <p className={`exercise-block__result exercise-block__result--${result}`}>
                    {result === 'correct'
                        ? '✅ Chính xác! Thứ tự đúng rồi.'
                        : '❌ Chưa đúng, thử lại nhé!'}
                </p>
            )}

            {/* Action buttons */}
            <div className="exercise-block__actions">
                <button className="exercise-block__btn exercise-block__btn--check" onClick={handleCheck}>
                    Kiểm tra đáp án
                </button>
                <button
                    className="exercise-block__btn exercise-block__btn--view"
                    onClick={() => setShowAnswer((v) => !v)}
                >
                    {showAnswer ? 'Ẩn đáp án' : 'Xem đáp án & câu chuyện'}
                </button>
            </div>

            {/* Answer panel */}
            {showAnswer && (
                <div className="exercise-block__answer">
                    <h5>Thứ tự đúng:</h5>
                    <ol>
                        {answer.map((sentence, i) => (
                            <li key={i}>{sentence}</li>
                        ))}
                    </ol>
                    {story && (
                        <>
                            <h5 style={{ marginTop: '12px' }}>Câu chuyện:</h5>
                            <p style={{ margin: 0 }}>{story}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default ExerciseBlock;
