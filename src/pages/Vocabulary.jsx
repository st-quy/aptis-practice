import { vocabularyData } from '../data/VocabularyData';
import { VocabularyTable } from '../components/VocabularyTable';
import '../styles/pages/Vocabulary.scss'

export function Vocabulary() {
  return (
    <>
      <title>Tổng hợp Từ vựng Quan trọng</title>
      <div className="content-pusher">
        <div className="container">
          <div className="page-intro">
            <h1>Tổng hợp Từ vựng Quan trọng</h1>
            <p>Từ vựng theo chủ đề Nơi chốn và Con người</p>
          </div>

          <main className="vocabulary-container">
            {/* PLACES VOCABULARY */}
            <div className="vocab-section">
              <h2>Từ vựng Nơi chốn</h2>
              <VocabularyTable
                title="📍 Bên trong (Indoors)"
                data={vocabularyData.places.indoors}
                tableType="places"
              />
              <VocabularyTable
                title="🌳 Bên ngoài (Outdoors)"
                data={vocabularyData.places.outdoors}
                tableType="places"
              />
            </div>

            {/* PEOPLE VOCABULARY */}
            <div className="vocab-section">
              <h2>Từ vựng về Người</h2>
              <VocabularyTable
                title="Danh từ tập hợp không có -s"
                data={vocabularyData.people.no_s}
              />
              <VocabularyTable
                title="Danh từ tập hợp có -s"
                data={vocabularyData.people.with_s}
              />
            </div>

            {/* FEATURES VOCABULARY */}
            <div className="vocab-section">
              <h2>Từ vựng Đặc trưng (Miêu tả tranh)</h2>
              <VocabularyTable
                title="Đặc trưng (Hình dáng, Vị trí)"
                data={vocabularyData.features.position}
              />
              <VocabularyTable
                title="Đặc trưng (Tình huống)"
                data={vocabularyData.features.situation}
              />
            </div>

            {/* DESCRIPTIONS - PEOPLE CHARACTERISTICS */}
            <div className="vocab-section">
              <h2>Miêu tả Đặc trưng của Con người</h2>
              <VocabularyTable
                title="Đầu tóc"
                data={{ items: vocabularyData.descriptions.hair_has, structure: 'She/He has + ...' }}
                tableType="description"
              />
              <VocabularyTable
                title="Đặc trưng tóc"
                data={{ items: vocabularyData.descriptions.hair_is, structure: 'She/He is + ...' }}
                tableType="description"
              />
              <VocabularyTable
                title="Râu"
                data={{ items: vocabularyData.descriptions.beard, structure: 'He has + ...' }}
                tableType="description"
              />
              <VocabularyTable
                title="Dáng người"
                data={{ items: vocabularyData.descriptions.body_shape, structure: 'She/He is + ...' }}
                tableType="description"
              />
              <VocabularyTable
                title="Quần áo"
                data={{ items: vocabularyData.descriptions.clothes, structure: 'She/He is wearing + ...' }}
                tableType="description"
              />
              <VocabularyTable
                title="Trang sức"
                data={{ items: vocabularyData.descriptions.accessories, structure: 'She/He is wearing + ...' }}
                tableType="description"
              />
            </div>

            {/* DETAILS VOCABULARY */}
            <div className="vocab-section">
              <h2>Từ vựng Chi tiết (Miêu tả tranh)</h2>
              <VocabularyTable title="Màu sắc" data={vocabularyData.details.colors} />
              <VocabularyTable title="Độ lớn, độ dài" data={vocabularyData.details.size_intensity} />
              <VocabularyTable title="Hình dáng" data={vocabularyData.details.shapes} />
              <VocabularyTable
                title="Động tác có liên quan với sự vật"
                data={vocabularyData.details.object_actions}
              />
              <VocabularyTable
                title="Động tác đặc biệt"
                data={vocabularyData.details.special_actions}
              />
              <VocabularyTable
                title="Động tác chuyển động"
                data={vocabularyData.details.movement_actions}
              />
              <VocabularyTable
                title="Vận động, hoạt động"
                data={vocabularyData.details.activities}
              />
              <VocabularyTable
                title="Động từ và tính từ biểu hiện cảm xúc"
                data={vocabularyData.details.emotions}
              />
            </div>
          </main>
        </div>
      </div>
    </>

  );
}